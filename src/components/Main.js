// @flow
import * as React from 'react';
import styles from './Main.css';

const Main = ({ children }: { children: React.Node }) => (
  <div className={styles.Main}>
    {children}
  </div>
);

export default Main;
