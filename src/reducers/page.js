// @flow
import { NOT_FOUND } from 'redux-first-router';
import type { Action } from 'type';

const components = {
  HOME: 'Home',
  FRIEND: 'FriendPageContainer',
  [NOT_FOUND]: 'NotFound',
};

export default (state: string = 'HOME', action: Action) => components[action.type] || state;
