export default {
  test: () => {
    return (dispatch, getState) => {
      return new Promise((resolve, reject) => {
        return resolve(dispatch({
          type: 'TEST'
        }))
      })
    }
  }
}
