import { Path, PathValue } from '@drpiou/ts-utils';
import { createStateContext, StateRef, WithStateProps } from '../../lib';
import { state, StateList } from '../state';
import { sagas } from '../state/sagas';

export type GlobalStateProps<P extends { [key: string]: unknown }> = WithStateProps<StateList, P>;

export type GlobalStateRef = StateRef<StateList>;

export type WithGlobalStatePathProps<P extends { [key: string]: Path<StateList> }> = WithStateProps<
  StateList,
  { [K in keyof P]: PathValue<StateList, P[K]> }
>;

export type WithGlobalStateProps = WithStateProps<StateList>;

export const [useGlobalState, GlobalStateProvider, withGlobalState] = createStateContext(state, {
  sagas,
  log: true,
});
