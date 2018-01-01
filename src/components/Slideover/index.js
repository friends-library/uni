// @flow
import React from 'react';
import Link from 'redux-first-router-link';
import styles from './Slideover.css';

const Slideover = () => (
  <div className={styles.Slideover}>
    <h2>Friends</h2>
    <ul>
      <li>
        <Link to="/friend/rebecca-jones">Rebecca Jones</Link>
      </li>
      <li>
        <Link to="/friend/isaac-penington">Isaac Penington</Link>
      </li>
      <li>
        <Link to="/friend/robert-barclay">Robert Barclay</Link>
      </li>
      <li>
        <Link to="/friend/john-gratton">John Gratton</Link>
      </li>
      <li>
        <Link to="/friend/john-burnyeat">John Burnyeat</Link>
      </li>
      <li>
        <Link to="/friend/stephen-crisp">Stephen Crisp</Link>
      </li>
      <li>
        <Link to="/friend/catherine-payton-phillips">Catherine Phillips</Link>
      </li>
      <li>
        <Link to="/friend/john-griffeth">John Griffeth</Link>
      </li>
      <li>
        <Link to="/friend/thomas-story">Thomas Story</Link>
      </li>
      <li>
        <Link to="/friend/william-penn">William Penn</Link>
      </li>
    </ul>
  </div>
);

export default Slideover;
