
export const addToBasket = (user) => (dispatch) => {
  return dispatch({
    type: 'ADD_TO_BASKET',
    payload: user
  })
}
export const deleteFromBasket = (user) => (dispatch) => {
  return dispatch({
    type: 'DELETE_FROM_BASKET',
    payload: user
  })
}
