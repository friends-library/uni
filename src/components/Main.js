import React from 'react';
import styles from './Main.css';

const Main = ({ children }) =>
  <div className={styles.Main}>
    {children}
  </div>

export default Main;
