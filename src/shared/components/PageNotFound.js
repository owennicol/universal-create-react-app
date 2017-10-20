import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const PageNotFound = (props, context = {}) => {
  if (context.setStatus) {
    context.setStatus(404)
  }

  return (
    <div>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
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
  setStatus: PropTypes.func
}

export default PageNotFound
