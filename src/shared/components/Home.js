import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchUsers, deleteUsers } from '../actions/users'

const Home = (props) => {
  return (
    <div className='App-intro container'>
      <p>
        <Link to={`/test/123`}>
          Test the router
        </Link>
      </p>
      {!props.users.length &&
        <p>
          <button className='btn btn-success' onClick={props.fetchUsers}>
            Fetch Users
          </button>
        </p>
      }
      {props.users.length > 0 &&
        <div>
          <p>
            <button className='btn btn-danger' onClick={props.deleteUsers}>
              Delete Users
            </button>
          </p>
          <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {props.users.map((user, index) => (
                <tr key={`user${user.id}-${index}`}>
                  <td>
                    {user.name}
                  </td>
                  <td>
                    {user.username}
                  </td>
                  <td>
                    {user.email}
                  </td>
                </tr>
              )
              )}
            </tbody>
          </table>
        </div>
      }
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
    fetchUsers: () => dispatch(fetchUsers()),
    deleteUsers: () => dispatch(deleteUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
