import React from 'react'
import { connect } from 'react-redux'
import { TransitionGroup, Transition } from 'transition-group'
import universal from 'react-universal-component'

import Loading from './Loading'
import Err from './Error'
import isLoading from '../selectors/isLoading'
import styles from './Main.css'

console.log(styles);

const UniversalComponent = universal(({ page }) => import(`./${page}`), {
  minDelay: 500,
  loading: Loading,
  error: Err
})

const Switcher = ({ page, direction, isLoading }) =>
  <TransitionGroup
    component='div'
    className={`${styles.Main} ${direction}`}
    duration={500}
    prefix='fade'
  >
    <Transition key={page}>
      <UniversalComponent page={page} isLoading={isLoading} />
    </Transition>
  </TransitionGroup>

const mapState = ({ page, direction, ...state }) => ({
  page,
  direction,
  isLoading: isLoading(state)
})

export default connect(mapState)(Switcher)
