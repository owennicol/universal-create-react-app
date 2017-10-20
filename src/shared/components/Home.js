import React from 'react'
import Helmet from 'react-helmet'

const Home = (props) => {
  return (
    <div className='App-intro container'>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1>Welcome home</h1>
    </div>
  )
}

export default Home
