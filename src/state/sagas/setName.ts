import { StateSagaCallback } from '../../../lib';
import { StateList } from '../index';

export const setName: StateSagaCallback<StateList> = (state) => {
  if (!state.user) {
    return null;
  }

  return {
    user: { name: [state.user.firstname, state.user.lastname].join(' ') },
  };
};
