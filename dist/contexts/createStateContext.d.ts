import React from 'react';
import { DeepPartial, DeepRecord, Path } from './types';
export declare type StateContextOptions<S = DeepRecord<string, unknown>> = {
    commitSagaOnError?: boolean;
    ignoreSagaError?: boolean;
    log?: boolean;
    logFilters?: Path<S>[];
    sagas?: StateSaga<S>[];
    throwSagaError?: boolean;
};
export declare type StateProviderProps<S> = {
    state?: S;
    defaultState?: DeepPartial<S>;
    onChange?: (state: S) => void;
    onRef?: (ref: StateRef<S>) => void;
};
export declare type StateRef<S> = {
    state: S;
    setState: SetStateContext<S>;
};
export declare type StateSaga<S, P = Path<S>> = {
    keys: P | P[];
    saga: StateSagaCallback<S>;
};
export declare type StateSagaCallback<S> = (state: S) => DeepPartial<S> | null;
export declare type WithStateProps<S, P = unknown> = P & Pick<StateRef<S>, 'setState'>;
export declare type SetStateContext<S> = (state: DeepPartial<S> | ((state: S) => DeepPartial<S> | null)) => void;
declare const createStateContext: <S extends DeepRecord<string, unknown>>(initialState: S, contextOptions?: StateContextOptions<S> | undefined) => [() => StateRef<S>, (props: React.PropsWithChildren<StateProviderProps<S>>) => JSX.Element, <K extends {
    [key: string]: Path<S>;
}>(keys?: K | undefined) => <C extends React.ComponentType<{}>, P extends React.ComponentProps<C>>(Component: React.ComponentType<P>) => (props: Omit<P, "setState" | keyof K>) => JSX.Element];
export default createStateContext;
