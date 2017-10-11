import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

const Home = (props) => {
  return (
    <div className='App-intro container'>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <p>
        <Link to={`/test/123`}>
          Test the router
        </Link>
      </p>
      <p>
        <Link to={`/users`}>
          Users
        </Link>
      </p>
    </div>
  )
}

export default Home
