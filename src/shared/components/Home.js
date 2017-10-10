import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchUsers } from '../actions/users'

const Home = (props) => {
  return (
    <div className='App-intro'>
      <p>
        <Link to={`/test/123`}>
          Test the router
        </Link>
      </p>
      <p>
        <button onClick={props.fetchUsers}>
          Fetch Users
        </button>
      </p>
      {props.users.map((user, index) => <p key={`user${user.id}-${index}`}>{user.name}</p>)}
    </div>
  )
}

function mapStateToProps (state, ownProps) {
  return {
    users: state.users
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
