// @flow
import { connect } from 'react-redux';
import type { State } from 'type';
import DocumentPage from './DocumentPage';

const mapStateToProps = (state: State): Object => {
  const { location: { payload: { friendSlug, documentSlug } } } = state;
  const friend = state.friends[friendSlug];
  const document = friend.documents.find(doc => doc.slug === documentSlug);
  return {
    document,
  };
};

export default connect(mapStateToProps)(DocumentPage);
