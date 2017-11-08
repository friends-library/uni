import React from 'react'
import { connect } from 'react-redux'
import { TransitionGroup, Transition } from 'transition-group'
import universal from 'react-universal-component'

import Loading from './Loading'
import styles from './Page.css'

const UniversalComponent = universal(({ page }) => import(`./${page}`), {
  loading: Loading,
})

const Page = ({ page }) =>
  <UniversalComponent page={page} />

const mapState = ({ page }) => ({
  page,
})

export default connect(mapState)(Page)
