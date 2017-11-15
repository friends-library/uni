// @flow
import React from 'react';
import styles from './StickyNav.css';

type Props = {
  toggleSlideover: () => *,
};

const StickyNav = ({ toggleSlideover }: Props) => (
  <div className={styles.StickyNav}>
    <span className={styles.SlideoverToggle} onClick={toggleSlideover}>
      ☰
    </span>
    <a href="/" className={styles.Logo}>
      Friends Library
    </a>
  </div>
);

export default StickyNav;
