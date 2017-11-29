// @flow
import * as React from 'react';
import Link from 'redux-first-router-link';
import url from 'lib/url';
import EditionClass from 'classes/Edition';
import styles from './Edition.css';

type Props = {
  edition: EditionClass,
};

const Edition = ({ edition }: Props) => {
  return (
    <section className={styles.Edition}>
      <h1 className={styles.Edition__title}>
        {edition.type} edition:
      </h1>
      <p className={styles.Edition__description}>
        <i>Updated</i> editions have been slightly modernized from the
        original texts by updating archaic spellings, word endings, and
        changing <i>thee</i> and <i>thine</i> to <i>you</i> and <i>your</i> etc.
        No other significant alterations or abridgements have been made.
      </p>
      <h2 className={styles.Edition__formats__title}>Formats:</h2>
      <ul>
        {edition.formats.map(format => (
          <li key={format.type}>
            <Link to={url(format)}>{format.type}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Edition;
