import React from 'react'
import { Link } from 'react-router-dom'
export default () => (
  <div className='App-intro'>
    <p>To get started, edit <code>src/shared/App.js</code> and save to reload.</p>
    <Link to={`/test/123`}>
      Test the router
    </Link>
  </div>
)
