// @flow
import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Slideover from './Slideover';
import Page from './Page';
import Main from './Main';
import StickyNav from './StickyNav';
import styles from './App.css';
import './Global.css';

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
      className={classNames({
        [styles['App--slideover-open']]: slideoverOpen,
        [styles['App--slideover-transitioning']]: slideoverTransitioning,
      })}
    >
      <Slideover />
      <StickyNav toggleSlideover={toggleSlideover} />
      <Main transitionEnd={slideoverComplete}>
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
