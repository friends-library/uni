import React from 'react'
import DevTools from './DevTools'
import Slideover from './Slideover'
import Main from './Main'
import styles from './App.css'

export default () =>
  <div>
    <div className={styles.App}>
      <Slideover />
      <Main />
    </div>

    <DevTools />
  </div>
