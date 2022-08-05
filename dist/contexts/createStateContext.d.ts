import { DeepPartial, DeepRecord, Path, PathValue } from '@drpiou/ts-utils';
import React, { ContextType, PropsWithChildren } from 'react';
export declare type StateProviderProps<S> = {
    state?: DeepPartial<S>;
    defaultState?: DeepPartial<S>;
    onChange?: (state: S) => void;
};
export declare type StateContextOptions<S = DeepRecord<string, unknown>> = {
    commitSagaOnError?: boolean;
    ignoreSagaError?: boolean;
    log?: boolean;
    logFilters?: Path<S>[];
    sagas?: StateSaga<S>[];
    throwSagaError?: boolean;
};
export declare type StateSaga<S, P = Path<S>> = {
    keys: P | P[];
    saga: StateSagaCallback<S>;
};
export declare type StateSagaCallback<S> = (state: S) => DeepPartial<S> | null;
declare type SetStateContext<S> = (state: DeepPartial<S> | ((state: S) => DeepPartial<S> | null)) => void;
declare const createStateContext: <S extends DeepRecord<string, unknown>>(initialState: S, contextOptions?: StateContextOptions<S> | undefined) => [<P extends Path<S>>(keys: P[]) => { [K in P]: PathValue<S, K>; } & Pick<{
    state: S;
    setState: SetStateContext<S>;
}, "setState">, (props: React.PropsWithChildren<StateProviderProps<S>>) => JSX.Element];
export default createStateContext;
