// @flow
import * as React from 'react';
import styles from './Badge.css';

type Props = {
  children: React.Node,
};

export default ({ children }: Props) => (
  <span className={styles.Badge}>
    {children}
  </span>
);
