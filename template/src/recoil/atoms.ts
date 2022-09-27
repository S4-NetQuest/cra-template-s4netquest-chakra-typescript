/* eslint-disable import/prefer-default-export */
import { atom } from 'recoil';
import {
  User,
  defaultCurrentUser,
} from './defaultStates';

export const currentUser = atom<User | null>({
  key: 'currentUser',
  default: defaultCurrentUser,
});
