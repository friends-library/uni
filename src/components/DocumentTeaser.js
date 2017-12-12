// @flow
import * as React from 'react';
import Link from 'redux-first-router-link';
import url from 'lib/url';
import responsiveDocumentTitle from 'lib/responsive';
import Document from 'classes/Document';
import styles from './DocumentTeaser.css';

type Props = {
  document: Document,
};

const DocumentTeaser = (props: Props) => {
  const { document } = props;
  return (
    <div className={styles.DocumentTeaser}>
      <h3
        className={styles.DocumentTeaser__title}
        dangerouslySetInnerHTML={{ __html: responsiveDocumentTitle(document) }}
      />
      <ul className={styles.DocumentTeaser__meta}>
        {document.hasAudio() &&
          <li>
            <i className="fa fa-headphones" />
              Audio Available
          </li>
        }
        {document.hasModernizedEdition() &&
          <li>
            <i className="fa fa-rocket" />
              Modern Available
          </li>
        }
        <li>
          <i className="fa fa-clock-o" />
          {document.shortestEdition().pages} Pages
        </li>
        <li>
          <i className="fa fa-tags" />
          {document.tags.join(', ')}
        </li>
      </ul>
      <Link className={styles.DocumentTeaser__link} to={url(document)}>
        View Document &rarr;
      </Link>
    </div>
  );
};

export default DocumentTeaser;
