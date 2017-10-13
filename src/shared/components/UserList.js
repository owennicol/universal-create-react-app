import React from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import _some from 'lodash/some'

import { fetchUsers, deleteUsers } from '../actions/users'
import { addToBasket, deleteFromBasket } from '../actions/basket'

const Home = (props) => {
  const userIsInBasket = (item) => _some(props.basket, item)
  const quantityOptions = [...Array(10)].map((opt, index) => <option value={index + 1}>{index + 1}</option>)
  return (
    <div className='App-intro container'>
      <Helmet>
        <title>User List</title>
      </Helmet>
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
                <th>Quantity</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {props.users.map((user, index) => {
                return (
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
                    <td>
                      <select>
                        {quantityOptions}
                      </select>
                    </td>
                    <td>
                      {!userIsInBasket(user) &&
                        <button
                          className='btn btn-block btn-success'
                          onClick={() => props.addToBasket(user)}>
                          Add to basket
                        </button>
                      }
                      {userIsInBasket(user) &&
                        <button
                          className='btn btn-block btn-danger'
                          onClick={() => props.deleteFromBasket(user)}>
                          Delete from basket
                        </button>
                      }
                    </td>
                  </tr>
                )
              }
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
    users: state.users,
    basket: state.basket
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    deleteUsers: () => dispatch(deleteUsers()),
    addToBasket: (user) => dispatch(addToBasket(user)),
    deleteFromBasket: (user) => dispatch(deleteFromBasket(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
