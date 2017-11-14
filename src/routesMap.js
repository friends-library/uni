// @flow
import { fetchJson } from 'utils';
import type { Dispatch, GetState } from 'type';

export default {
  HOME: '/',
  FRIEND: {
    path: '/friend/:slug',
    thunk: async (dispatch: Dispatch, getState: GetState) => {
      const { location: { payload: { slug } } } = getState();
      const friend = await fetchJson(`/api/friend/${slug}`);
      dispatch({ type: 'FRIEND_FETCHED', payload: friend });
    },
  },
};
