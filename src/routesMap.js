// @flow
import getFriend from 'utils';
import Friend from 'classes/Friend';
import type { Dispatch, GetState } from 'type';

async function fetchFriend(dispatch: Dispatch, getState: GetState): void | Promise<*> {
  const { friends, location: { payload: { friendSlug } } } = getState();
  if (friends[friendSlug] instanceof Friend) {
    return;
  }
  const friend = await getFriend(friendSlug);
  dispatch({ type: 'FRIEND_FETCHED', payload: friend });
}

export default {
  HOME: '/',
  FRIEND: {
    path: '/friend/:friendSlug',
    thunk: fetchFriend,
  },
  DOCUMENT: {
    path: '/:friendSlug/:documentSlug',
    thunk: fetchFriend,
  },
  AUDIO: {
    path: '/:friendSlug/:documentSlug/:editionType/audio',
    thunk: fetchFriend,
  },
};
