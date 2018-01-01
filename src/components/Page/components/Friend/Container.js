// @flow
import { connect } from 'react-redux';
import type { State } from 'type';
import FriendPage from './';

const mapStateToProps = (state: State): Object => {
  const { location: { payload: { friendSlug } } } = state;
  return {
    friend: state.friends[friendSlug],
  };
};

export default connect(mapStateToProps)(FriendPage);
