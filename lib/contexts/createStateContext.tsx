import { getComponentName, useStateSafe } from '@drpiou/react-utils';
import { logError, logInfo, paths } from '@drpiou/ts-utils';
import castArray from 'lodash/castArray';
import get from 'lodash/get';
import intersection from 'lodash/intersection';
import map from 'lodash/map';
import merge from 'lodash/merge';
import reduce from 'lodash/reduce';
import uniq from 'lodash/uniq';
import React, { createContext, memo, useCallback, useContext, useEffect, useMemo, useRef } from 'react';
import { DeepPartial, DeepRecord, Path } from './types';

export type StateContextOptions<S = DeepRecord<string, unknown>> = {
  commitSagaOnError?: boolean;
  ignoreSagaError?: boolean;
  log?: boolean;
  logFilters?: Path<S>[];
  sagas?: StateSaga<S>[];
  throwSagaError?: boolean;
};

export type StateProviderProps<S> = {
  state?: S;
  defaultState?: DeepPartial<S>;
  onChange?: (state: S) => void;
  onRef?: (ref: StateRef<S>) => void;
};

export type StateRef<S> = {
  state: S;
  setState: SetStateContext<S>;
};

export type StateSaga<S, P = Path<S>> = {
  keys: P | P[];
  saga: StateSagaCallback<S>;
};

export type StateSagaCallback<S> = (state: S) => DeepPartial<S> | null;

export type WithStateProps<S, P = unknown> = P & Pick<StateRef<S>, 'setState'>;

export type SetStateContext<S> = (state: DeepPartial<S> | ((state: S) => DeepPartial<S> | null)) => void;

const DEFAULT_OPTIONS: StateContextOptions = {
  commitSagaOnError: false,
  ignoreSagaError: false,
  log: false,
  throwSagaError: true,
};

const createStateContext = <S extends DeepRecord<string, unknown>>(
  initialState: S,
  contextOptions?: StateContextOptions<S>,
): [typeof useCtx, typeof Provider, typeof withState] => {
  const ctx = createContext<StateRef<S>>({
    state: initialState,
    setState: () => initialState,
  });

  const options = { ...DEFAULT_OPTIONS, ...contextOptions } as StateContextOptions<S>;

  const Provider = (props: React.PropsWithChildren<StateProviderProps<S>>): JSX.Element => {
    const { state: controlledState, defaultState, onChange, onRef, children } = props;

    const handleChange = useRef(onChange);
    const handleRef = useRef(onRef);

    handleChange.current = onChange;
    handleRef.current = onRef;

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
              logInfo('state:saga:run', { keys: saga.keys, sagaState });
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
        });
      },
      [setState, updateState],
    );

    const stateValue = controlledState || state;

    const ref = useMemo(() => {
      return { state: stateValue, setState: handleState };
    }, [handleState, stateValue]);

    useEffect(() => {
      handleChange.current?.(state);
    }, [state]);

    useEffect(() => {
      handleRef.current?.(ref);
    }, [ref]);

    return <ctx.Provider value={ref}>{children}</ctx.Provider>;
  };

  const useCtx = (): React.ContextType<typeof ctx> => {
    const c = useContext(ctx);

    if (c === undefined) {
      throw new Error("Couldn't find a context object. Is your component inside StateProvider?");
    }

    return c;
  };

  const withState = <K extends { [key: string]: Path<S> }>(
    keys: K,
  ): (<C extends React.ComponentType, P extends React.ComponentProps<C>>(
    Component: React.ComponentType<P>,
  ) => (props: Omit<P, keyof WithStateProps<S, K>>) => JSX.Element) => {
    return ((Component: React.ComponentType): React.ComponentType => {
      const MemoComponent = memo(Component);

      const WithComponent = (props: any): JSX.Element => {
        const c = useContext(ctx);

        const useState = useMemo(() => {
          return {
            ...reduce(
              keys,
              (acc, path, key) => {
                acc[key] = get(c.state, path, undefined);

                return acc;
              },
              {} as { [key: string]: unknown },
            ),
            setState: c.setState,
          };
        }, [c]);

        return <MemoComponent {...props} {...useState} />;
      };

      WithComponent.displayName = getComponentName(Component);

      return WithComponent;
    }) as never;
  };

  return [useCtx, Provider, withState];
};

export default createStateContext;
