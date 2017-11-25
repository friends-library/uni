// @flow
import React from 'react';
import Friend from 'classes/Friend';
import styles from './FriendPage.css';
import DocumentTeaser from './DocumentTeaser';
import Divider from './Divider';
import Badge from './Badge';

type Props = {
  friend: Friend,
};

const FriendPage = ({ friend }: Props) => {
  if (!friend) {
    return null;
  }

  const { documents } = friend;
  return (
    <div className={styles.FriendPage}>
      <section>
        <h1>{friend.name}</h1>
        <p>{friend.description}</p>
      </section>
      <Divider />
      <section>
        <h2>
          Documents:
          <Badge>{documents.length}</Badge>
        </h2>
        {documents.map(d => <DocumentTeaser key={d.slug} document={d} />)}
      </section>
    </div>
  );
};

export default FriendPage;
