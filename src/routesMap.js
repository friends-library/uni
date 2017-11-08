import { redirect, NOT_FOUND } from 'redux-first-router'
import { fetchJson } from './utils'

export default {
  HOME: '/',
  FRIEND: {
    path: '/friend/:slug',
    thunk: async (dispatch, getState) => {
      const { location: { payload: { slug } } } = getState();
      const friend = await fetchJson(`/api/friend/${slug}`)
      dispatch({ type: 'FRIEND_FETCHED', payload: friend });
    }
  }
}
