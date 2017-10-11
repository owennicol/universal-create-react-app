
export const addToBasket = (user) => async (dispatch) => {
  return dispatch({
    type: 'ADD_TO_BASKET',
    payload: user
  })
}
