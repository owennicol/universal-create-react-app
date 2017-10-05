import React from 'react'
import { Link } from 'react-router-dom'
export default ({ match }) => (
  <div className='App-intro'>
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
