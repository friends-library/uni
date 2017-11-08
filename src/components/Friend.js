import React from 'react'
import { fromJS } from 'immutable';
import { connect } from 'react-redux'

const Friend = ({ friend }) => <p>{friend.get('name')}</p>

const mapStateToProps = (state) => {
  const slug = state.location.payload.slug;
  return {
    friend: state.friends.get(slug),
  };
};

export default connect(mapStateToProps)(Friend);
