// @flow
import { connect } from 'react-redux';
import type { State } from 'type';
import FriendPage from './FriendPage';

const mapStateToProps = (state: State) => {
  const { location: { payload: { slug } } } = state;
  return {
    friend: state.friends.get(slug),
  };
};

export default connect(mapStateToProps)(FriendPage);
