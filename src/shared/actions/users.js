import 'isomorphic-fetch'

export const fetchUsers = () => async (dispatch) => {
  const response = await fetch('//jsonplaceholder.typicode.com/users')
  const users = await response.json()
  return dispatch({
    type: 'USERS_LOADED',
    payload: users
  })
}
