import React from 'react'
import Link from 'redux-first-router-link'

const Home = () =>
  <div>
    <h1><Link to="/">Home</Link></h1>
    <h1><Link to="/friend/rebecca-jones">Rebecca Jones</Link></h1>
  </div>

export default Home
