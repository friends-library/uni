// @flow
import * as React from 'react';
import classNames from 'classnames';
import styles from './Main.css';

type Props = {
  transitionEnd: () => void,
  children: React.Node
};

const Main = ({ children, transitionEnd, slideoverOpen }: Props) => (
  <div className={styles.Main} onTransitionEnd={transitionEnd}>
    {children}
  </div>
);

export default Main;
