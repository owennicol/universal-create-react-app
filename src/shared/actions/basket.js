
export const addToBasket = (item) => (dispatch) => {
  return dispatch({
    type: 'ADD_TO_BASKET',
    payload: item
  })
}
export const deleteFromBasket = (item) => (dispatch) => {
  return dispatch({
    type: 'DELETE_FROM_BASKET',
    payload: item
  })
}
