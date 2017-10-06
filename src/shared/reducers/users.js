export default function reducer (state = {}, action) {
  switch (action.type) {
    case 'USERS_LOADED':
      return Object.assign({}, state, action.payload)

    default:
      return state
  }
}
