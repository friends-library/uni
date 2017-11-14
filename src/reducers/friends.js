// @flow
import { fromJS, Map } from 'immutable';
import type { SuccessAction } from 'type';

export default (
  state: Map<string, Map<string, *>> = Map(),
  action: SuccessAction,
) => {
  switch (action.type) {
    case 'FRIEND_FETCHED': {
      if (!action.payload) {
        return state;
      }
      const { slug } = action.payload;
      return state.set(slug, fromJS(action.payload));
    }
    default:
      return state;
  }
};
