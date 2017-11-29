// @flow
import getFriend from 'utils';
import Friend from 'classes/Friend';
import type { Dispatch, GetState } from 'type';

export default {
  HOME: '/',
  FRIEND: {
    path: '/friend/:slug',
    thunk: async (dispatch: Dispatch, getState: GetState) => {
      const { friends, location: { payload: { slug } } } = getState();
      if (friends[slug] instanceof Friend) {
        return;
      }
      const friend = await getFriend(slug);
      dispatch({ type: 'FRIEND_FETCHED', payload: friend });
    },
  },
  DOCUMENT: {
    path: '/:friendslug/:documentslug',
    thunk: async (dispatch: Dispatch, getState: GetState) => {
      const { friends, location: { payload: { friendslug } } } = getState();
      if (friends[friendslug] instanceof Friend) {
        return;
      }
      const friend = await getFriend(friendslug);
      dispatch({ type: 'FRIEND_FETCHED', payload: friend });
    },
  },
};
