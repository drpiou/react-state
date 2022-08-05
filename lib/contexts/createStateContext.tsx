import { useStateSafe } from '@drpiou/react-utils';
import { DeepPartial, DeepRecord, log, logError, logInfo, Path, paths, PathValue } from '@drpiou/ts-utils';
import castArray from 'lodash/castArray';
import intersection from 'lodash/intersection';
import map from 'lodash/map';
import merge from 'lodash/merge';
import pick from 'lodash/pick';
import uniq from 'lodash/uniq';
import React, { ContextType, createContext, PropsWithChildren, useCallback, useContext, useEffect, useMemo, useRef } from 'react';

export type StateProviderProps<S> = {
  state?: DeepPartial<S>;
  defaultState?: DeepPartial<S>;
  onChange?: (state: S) => void;
};

export type StateContextOptions<S = DeepRecord<string, unknown>> = {
  commitSagaOnError?: boolean;
  ignoreSagaError?: boolean;
  log?: boolean;
  logFilters?: Path<S>[];
  sagas?: StateSaga<S>[];
  throwSagaError?: boolean;
};

export type StateSaga<S, P = Path<S>> = {
  keys: P | P[];
  saga: StateSagaCallback<S>;
};

export type StateSagaCallback<S> = (state: S) => DeepPartial<S> | null;

type SetStateContext<S> = (state: DeepPartial<S> | ((state: S) => DeepPartial<S> | null)) => void;

const DEFAULT_OPTIONS: StateContextOptions = {
  commitSagaOnError: false,
  ignoreSagaError: false,
  log: false,
  throwSagaError: true,
};

const createStateContext = <S extends DeepRecord<string, unknown>>(
  initialState: S,
  contextOptions?: StateContextOptions<S>,
): [typeof useCtx, typeof Provider] => {
  const ctx = createContext<{
    state: S;
    setState: SetStateContext<S>;
  }>({
    state: initialState,
    setState: () => initialState,
  });

  const options = { ...DEFAULT_OPTIONS, ...contextOptions } as StateContextOptions<S>;

  const Provider = (props: PropsWithChildren<StateProviderProps<S>>): JSX.Element => {
    const { state: controlledState, defaultState, onChange, children } = props;

    const handleChange = useRef(onChange);

    handleChange.current = onChange;

    const updateState = useCallback((prevState: S, updatedState?: DeepPartial<S>): S => {
      const newState = merge({}, prevState, updatedState);

      let newStateWithSaga = merge({}, newState);
      let updatedStatePaths = paths(updatedState || {}) as string[];

      map(options.sagas, (saga) => {
        const keys = castArray(saga.keys as string[]);

        if (intersection(updatedStatePaths, keys).length) {
          try {
            const sagaState = saga.saga(newStateWithSaga);

            if (options.log && (!options.logFilters || intersection(options.logFilters, keys))) {
              log('state:saga:run', { keys: saga.keys, sagaState });
            }

            if (sagaState !== null) {
              newStateWithSaga = merge(newStateWithSaga, sagaState);
              updatedStatePaths = uniq([...updatedStatePaths, ...(paths(sagaState) as string[])]);
            }
          } catch (error: unknown) {
            if (options.log) {
              logError('state:saga:error', saga.keys, { error });
            }

            if (options.throwSagaError) {
              throw error;
            }

            if (!options.ignoreSagaError) {
              return options.commitSagaOnError ? newStateWithSaga : newState;
            }
          }
        }
      });

      if (options.log) {
        logInfo('state:update', { prevState, updatedState, newState, newStateWithSaga });
      }

      return newStateWithSaga;
    }, []);

    const [state, setState] = useStateSafe<S>(() => {
      const firstState = merge({}, initialState, defaultState);

      return updateState(firstState, firstState);
    });

    useEffect(() => {
      console.log('__DEV__:createStateContext@useEffect', { state });

      handleChange.current?.(state);
    }, [state]);

    const handleState: SetStateContext<S> = useCallback(
      (updatedState) => {
        setState((prevState) => {
          if (typeof updatedState === 'function') {
            const newState = updatedState(prevState);

            if (newState === null) {
              return prevState;
            }

            return updateState(prevState, newState);
          } else {
            return updateState(prevState, updatedState);
          }

          // setTimeout(() => onChange?.(newUpdatedState));
        });
      },
      [setState, updateState],
    );

    return (
      <ctx.Provider value={{ state: controlledState ? merge({}, state, controlledState) : state, setState: handleState }}>
        {children}
      </ctx.Provider>
    );
  };

  const useCtx = <P extends Path<S>>(keys: P[]): { [K in P]: PathValue<S, K> } & Pick<ContextType<typeof ctx>, 'setState'> => {
    const c = useContext(ctx);

    if (c === undefined) {
      throw new Error("Couldn't find a context object. Is your component inside StateProvider?");
    }

    return useMemo(
      () => ({ ...(pick(c.state, keys) as { [K in P]: PathValue<S, K> }), setState: c.setState }),
      [c.setState, c.state, keys],
    );
  };

  return [useCtx, Provider];
};

export default createStateContext;
