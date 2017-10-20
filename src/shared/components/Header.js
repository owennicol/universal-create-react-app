import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'

const Header = () => (
  <div className='App-header'>
    <Link to='/'>
      <img src={logo} className='App-logo' alt='logo' />
    </Link>
    <h2>Welcome to Universal React</h2>

  </div>
)

export default Header
