import { StateSaga } from '../../../lib';
import { StateList } from '../index';
import { setName } from './setName';

export const sagas: StateSaga<StateList>[] = [
  {
    keys: ['user.firstname', 'user.lastname'],
    saga: setName,
  },
];
