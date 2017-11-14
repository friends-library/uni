// @flow
import React from 'react';
import { Map } from 'immutable';
import { connect } from 'react-redux';

const Friend = ({ friend }: { friend: Map<string, *> }) => <p>{friend.get('name')}</p>;

const mapStateToProps = (state) => {
  const { location: { payload: { slug } } } = state;
  return {
    friend: state.friends.get(slug),
  };
};

export default connect(mapStateToProps)(Friend);
