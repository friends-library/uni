// @flow
import { connect } from 'react-redux';
import type { State } from 'type';
import Document from 'classes/Document';
import Edition from 'classes/Edition';
import AudioPage from './';

const mapStateToProps = (state: State): Object => {
  const { location: { payload: { friendSlug, documentSlug, editionType } } } = state;
  const friend = state.friends[friendSlug];
  const document = friend.documents.find(d => d.slug === documentSlug) || new Document();
  const edition = document.editions.find(e => e.type === editionType) || new Edition();
  return {
    edition,
    document,
  };
};

export default connect(mapStateToProps)(AudioPage);
