import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchUsers } from '../shared/actions/users'

class List extends Component {
  static fetchData (store) {
    return store.dispatch(fetchUsers())
  }

  componentDidMount () {
    this.props.fetchUsers()
  }

  render () {
    return (
      <div >
        {
          this.props.items.map(item => {
            return (
              <div key={item.id} >
                <span>{item.name}</span>
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ items: state.users.items })
const mapDispatchToProps = (dispatch) =>
  ({
    fetchUsers: () => dispatch(fetchUsers())
  })

export default connect(mapStateToProps, mapDispatchToProps)(List)
