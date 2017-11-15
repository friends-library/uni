// @flow
import * as React from 'react';
import classNames from 'classnames';
import styles from './Main.css';

type Props = {
  slideoverOpen: boolean,
  transitionEnd: () => void,
  children: React.Node
};

const Main = ({ children, transitionEnd, slideoverOpen }: Props) => (
  <div
    className={classNames(styles.Main, {
      [styles['Main--slideover-open']]: slideoverOpen,
    })}
    onTransitionEnd={transitionEnd}
  >
    {children}
  </div>
);

export default Main;
