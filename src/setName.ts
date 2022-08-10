import { StateSagaCallback } from '../lib';
import { StateList } from './config';

export const setName: StateSagaCallback<StateList> = (state) => {
  return {
    user: { name: [state.user.firstname, state.user.lastname].join(' ') },
  };
};
