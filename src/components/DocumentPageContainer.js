// @flow
import { connect } from 'react-redux';
import type { State } from 'type';
import DocumentPage from './DocumentPage';

const mapStateToProps = (state: State) => {
  const { location: { payload: { friendslug, documentslug } } } = state;
  const friend = state.friends[friendslug];
  const document = friend.documents.find(doc => doc.slug === documentslug);
  return {
    document,
  };
};

export default connect(mapStateToProps)(DocumentPage);
