import { StateSaga } from '../lib';
import { StateList } from './config';
import { setName } from './setName';

export const sagas: StateSaga<StateList>[] = [
  {
    keys: ['user.firstname', 'user.lastname'],
    saga: setName,
  },
];
