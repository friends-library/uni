// @flow
/* eslint-disable max-len */
import * as React from 'react';
import Link from 'redux-first-router-link';
import Edition from 'classes/Edition';
import Document from 'classes/Document';
import Audio from 'classes/Audio';
import url from 'lib/url';
import Divider from './Divider';
import EmbeddedAudio from './EmbeddedAudio';
import styles from './AudioPage.css';

type Props = {|
  document: Document,
  edition: Edition,
|};

export default ({ document, edition }: Props) => {
  const audio = edition.audio || new Audio();

  return (
    <div className={styles.AudioPage}>
      <div>
        <h1 className={styles.AudioPage__title}>
          {document.title} (audio)
        </h1>
        <h2 className={styles.AudioPage__byline}>
          by <Link to={url(document.friend)}>{document.friend.name}</Link>
        </h2>
        <p>
          This is the audio version of {document.friend.name}&apos;s <Link to={url(document)}>{document.title}</Link>, read by {audio.reader}. For other formats besides audio, <Link to={url(document)}>click here</Link>.
        </p>
      </div>
      <Divider />
      {audio.parts.map(part => (
        <div key={part.soundcloudIdHq}>
          <h3>{part.title}</h3>
          <EmbeddedAudio id={part.soundcloudIdHq} title={part.title} />
        </div>
      ))}
    </div>
  );
};
