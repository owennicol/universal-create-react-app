import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

const TestRouterPage = ({ match }) => (
  <div className='App-intro'>
    <Helmet>
      <title>Test Router Page</title>
    </Helmet>
    <p>
      Test page {match.params.id}
    </p>
    <p>
      <Link to={`/`}>
        Home
    </Link>
    </p>
    <p>
      <Link to={`/aljlskaklksdkfaj falsflasd`}>
        Go to non-existent page
      </Link>
    </p>
  </div>
)

export default TestRouterPage
