import 'isomorphic-fetch'
export default {
  fetchUsers: () => (dispatch) => {
    return fetch('//jsonplaceholder.typicode.com/users')
      .then(res => {
        return res.json()
      })
      .then(users => {
        dispatch({
          type: 'USERS_LOADED',
          items: users
        })
      })
  }
}
