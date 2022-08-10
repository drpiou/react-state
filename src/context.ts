import { createStateContext } from '../lib';
import { state } from './config';
import { sagas } from './sagas';

export const [useGlobalState, GlobalStateProvider] = createStateContext(state, {
  sagas,
  log: true,
});
