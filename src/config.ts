import { userState } from './user';

export type StateList = typeof state;

export type StateKey = keyof StateList;

export const state = {
  isLoggedIn: false,
  user: userState,
};
