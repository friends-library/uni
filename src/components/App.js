import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import Slideover from './Slideover'
import Page from './Page'
import Main from './Main'
import StickyNav from './StickyNav'
import styles from './App.css'
import mainStyles from './Main.css'

const LolApp = ({ slideoverOpen, toggleSlideover }) => (
  <div
    className={classNames(styles.App, {
      [mainStyles['Slideover--open']]: slideoverOpen
    })}
  >
    <Slideover />
    <Main>
      <StickyNav toggleSlideover={toggleSlideover} />
      <Page />
    </Main>
  </div>
)

const mapStateToProps = state => ({
  slideoverOpen: state.slideover.open
})

const mapDispatchToProps = dispatch => ({
  toggleSlideover: () => dispatch({ type: 'SLIDEOVER_TOGGLE' })
})

export default connect(mapStateToProps, mapDispatchToProps)(LolApp)
