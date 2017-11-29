// @flow
import * as React from 'react';
import Link from 'redux-first-router-link';
import url from 'lib/url';
import Document from 'classes/Document';
import Divider from 'components/Divider';
import Edition from 'components/Edition';
import styles from './DocumentPage.css';

type Props = {
  document: Document,
};

const DocumentPage = ({ document }: Props) => {
  const { friend } = document;
  return (
    <div className={styles.DocumentPage}>
      <div>
        <h1 className={styles.DocumentPage__title}>{document.title}</h1>
        <h2 className={styles.DocumentPage__byline}>
          by <Link to={url(friend)}>{friend.name}</Link>
        </h2>
        <p>{document.description}</p>
      </div>
      <Divider />
      <div>
        {document.editions.map(e => <Edition key={e.type} edition={e} />)}
      </div>
    </div>
  );
};

export default DocumentPage;
