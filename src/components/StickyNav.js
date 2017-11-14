// @flow
import React from 'react';
import styles from './StickyNav.css';

type Props = {
  toggleSlideover: () => *,
};

const StickyNav = ({ toggleSlideover }: Props) => (
  <div className={`${styles.StickyNav} block container-fluid nav-block`}>
    <div className="row">
      <div className="col">
        <a className={styles.SlideoverToggle} onClick={toggleSlideover}>
          ☰
        </a>
        <p>
          <a href="/" className={styles.Logo}>
            Friends Library
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default StickyNav;
