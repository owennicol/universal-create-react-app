import 'isomorphic-fetch'

export const fetchItems = () => async (dispatch) => {
  const response = await fetch('//jsonplaceholder.typicode.com/users')
  const items = await response.json()
  return dispatch({
    type: 'FETCH_ITEMS',
    payload: items
  })
}
export const deleteItems = () => async (dispatch) => {
  return dispatch({
    type: 'DELETE_ITEMS'
  })
}
