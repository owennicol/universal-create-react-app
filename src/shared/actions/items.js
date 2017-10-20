import 'isomorphic-fetch'

export const fetchItems = () => async (dispatch) => {
  const response = await fetch('//jsonplaceholder.typicode.com/users')
  const items = await response.json()
  return dispatch({
    type: 'FETCH_ITEMS',
    payload: items
  })
}
export const deleteItems = () => (dispatch) => {
  return dispatch({
    type: 'DELETE_ITEMS'
  })
}

export const changeItemQuantity = (item, quantity) => (dispatch) => {
  return dispatch({
    type: 'CHANGE_ITEM_QUANTITY',
    payload: {
      item,
      quantity
    }
  })
}
