import { fromJS } from 'immutable';

export default (state = fromJS({}), action = {}) => {
  switch (action.type) {
    case 'FRIEND_FETCHED':
      const { slug } = action.payload;
      return state.set(slug, fromJS(action.payload));
    default:
      return state
  }
}
