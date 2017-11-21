// @flow
import * as React from 'react';
import Document from 'classes/Document';
import styles from './DocumentTeaser.css';

type Props = {
  document: Document,
}

const DocumentTeaser = (props: Props) => {
  const { document } = props;
  return (
    <div className={styles.DocumentTeaser}>
      <h3 className={styles.DocumentTeaser__title}>
        {document.title}
      </h3>
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
      <a className={styles.DocumentTeaser__link} href="#">
        View Document &rarr;
      </a>
    </div>
  );
};

export default DocumentTeaser;
