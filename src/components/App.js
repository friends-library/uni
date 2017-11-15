// @flow
import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Slideover from './Slideover';
import Page from './Page';
import Main from './Main';
import StickyNav from './StickyNav';
import styles from './App.css';
import '../global.css';

type Props = {
  slideoverTransitioning: boolean,
  slideoverOpen: boolean,
  toggleSlideover: () => void,
  slideoverComplete: () => void,
};

const App = (props: Props) => {
  const {
    slideoverTransitioning,
    slideoverOpen,
    toggleSlideover,
    slideoverComplete,
  } = props;

  return (
    <div
      className={classNames(styles.App, {
        [styles['App--slideover-open']]: slideoverOpen,
        [styles['App--slideover-transitioning']]: slideoverTransitioning,
      })}
    >
      <Slideover />
      <Main transitionEnd={slideoverComplete} slideoverOpen={slideoverOpen}>
        <StickyNav toggleSlideover={toggleSlideover} />
        <Page />
      </Main>
    </div>
  );
};

const mapStateToProps = state => ({
  slideoverOpen: state.slideover.open,
  slideoverTransitioning: state.slideover.transitioning,
});

const mapDispatchToProps = (dispatch: (any) => *) => ({
  toggleSlideover: () => dispatch({ type: 'SLIDEOVER_TOGGLE' }),
  slideoverComplete: () => dispatch({ type: 'SLIDEOVER_TRANSITION_END' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
