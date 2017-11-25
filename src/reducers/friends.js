// @flow
import type { SuccessAction } from 'type';
import friendFromJS from 'classes/map';
import Friend from 'classes/Friend';

export default (
  state: { [string]: Friend } = {},
  action: SuccessAction,
) => {
  switch (action.type) {
    case 'FRIEND_FETCHED': {
      if (!action.payload) {
        return state;
      }
      const { slug } = action.payload;
      return {
        ...state,
        [slug]: friendFromJS(action.payload),
      };
    }
    default:
      return state;
  }
};
