import 'isomorphic-fetch'

export const fetchUsers = () => (dispatch) => {
  return fetch('//jsonplaceholder.typicode.com/users')
    .then(res => {
      return res.json()
    })
    .then(users => {
      dispatch({
        type: 'USERS_LOADED',
        payload: users
      })
    })
}
