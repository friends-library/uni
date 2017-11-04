import React from 'react'
import { notFound } from './Main.css'

export default error =>
  <div className={notFound}>
    ERROR: {error.message}
  </div>
