import { useStateSafe } from '@drpiou/react-utils';
import { DeepPartial, DeepRecord, log, logError, logInfo, Path, paths, PathValue } from '@drpiou/ts-utils';
import castArray from 'lodash/castArray';
import intersection from 'lodash/intersection';
import map from 'lodash/map';
import merge from 'lodash/merge';
import pick from 'lodash/pick';
import React from 'react';

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
  const ctx = React.createContext<{
    state: S;
    setState: SetStateContext<S>;
  }>({
    state: initialState,
    setState: () => initialState,
  });

  const options = { ...DEFAULT_OPTIONS, ...contextOptions } as StateContextOptions<S>;

  const Provider = (props: React.PropsWithChildren<StateProviderProps<S>>): JSX.Element => {
    const { state: controlledState, defaultState, onChange, children } = props;

    const updateState = React.useCallback((prevState: S, updatedState?: DeepPartial<S>): S => {
      const newState = merge({}, prevState, updatedState);

      let newStateWithSaga = merge({}, newState);
      let updatedStateWithSaga = merge({}, updatedState);

      map(options.sagas, (saga) => {
        const updatedStatePaths = paths(updatedStateWithSaga);

        if (intersection(updatedStatePaths, castArray(saga.keys as string[])).length) {
          try {
            const sagaState = saga.saga(newStateWithSaga);

            if (options.log && (!options.logFilters || intersection(options.logFilters, saga.keys as string[]))) {
              log('state:saga:run', { keys: saga.keys, sagaState });
            }

            if (sagaState !== null) {
              newStateWithSaga = merge(newStateWithSaga, sagaState);
              updatedStateWithSaga = merge(updatedStateWithSaga, sagaState);
            }
          } catch (error: unknown) {
            if (options.throwSagaError) {
              throw error;
            }

            if (options.log) {
              logError('state:saga:error', saga.keys, { error });
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

    const handleState: SetStateContext<S> = React.useCallback(
      (updatedState) => {
        setState((prevState) => {
          const newState = typeof updatedState === 'function' ? updatedState(prevState) : updatedState;

          if (newState === null) {
            return prevState;
          }

          const newUpdatedState = updateState(prevState, newState);

          setTimeout(() => onChange?.(newUpdatedState));

          return newUpdatedState;
        });
      },
      [onChange, setState, updateState],
    );

    return (
      <ctx.Provider value={{ state: controlledState ? merge({}, state, controlledState) : state, setState: handleState }}>
        {children}
      </ctx.Provider>
    );
  };

  const useCtx = <P extends Path<S>>(
    keys: P[],
  ): { [K in P]: PathValue<S, K> } & Pick<React.ContextType<typeof ctx>, 'setState'> => {
    const c = React.useContext(ctx);

    if (c === undefined) {
      throw new Error("Couldn't find a context object. Is your component inside StateProvider?");
    }

    return React.useMemo(
      () => ({ ...(pick(c.state, keys) as { [K in P]: PathValue<S, K> }), setState: c.setState }),
      [c.setState, c.state, keys],
    );
  };

  return [useCtx, Provider];
};

export default createStateContext;
