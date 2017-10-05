import React from 'react'
import PropTypes from 'prop-types'

import {
  Route,
  Switch,
  Link
} from 'react-router-dom'

import logo from './logo.svg'

const Header = () => (
  <div className='App-header'>
    <img src={logo} className='App-logo' alt='logo' />
    <h2>Welcome to Universal React</h2>
  </div>
)

export const PageNotFound = (props, context = {}) => {
  if (context.setStatus) {
    context.setStatus(404)
  }

  return (
    <div>
      <h1>
        Page not found
      </h1>
      <Link to='/'>
        Go home
      </Link>
    </div>
  )
}
PageNotFound.contextTypes = {
  setStatus: PropTypes.func.isRequired
}

const App = ({children}) => (
  <div className='App'>
    <div>
      <Header />
      {children}
    </div>
  </div>
)

export default App
