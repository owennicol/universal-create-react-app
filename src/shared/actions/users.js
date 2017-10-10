import 'isomorphic-fetch'

export const fetchUsers = () => async (dispatch) => {
  const response = await fetch('//jsonplaceholder.typicode.com/users')
  const users = await response.json()
  return dispatch({
    type: 'FETCH_USERS',
    payload: users
  })
}
export const deleteUsers = () => async (dispatch) => {
  return dispatch({
    type: 'DELETE_USERS'
  })
}
