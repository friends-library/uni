// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { SuccessAction, Dispatch } from 'type';
import classNames from 'classnames';
import Slideover from 'components/Slideover';
import Page from 'components/Page';
import StickyNav from 'components/StickyNav';
import 'components/Global.css';
import styles from './App.css';

type Props = {
  slideoverTransitioning: boolean,
  slideoverOpen: boolean,
  toggleSlideover: () => SuccessAction,
  slideoverComplete: () => SuccessAction,
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
      <div className={styles.App__Content} onTransitionEnd={slideoverComplete}>
        <Page />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  slideoverOpen: state.slideover.open,
  slideoverTransitioning: state.slideover.transitioning,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleSlideover: () => dispatch({ type: 'SLIDEOVER_TOGGLE' }),
  slideoverComplete: () => dispatch({ type: 'SLIDEOVER_TRANSITION_END' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
