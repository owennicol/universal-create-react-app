export default function reducer (state = [], action) {
  switch (action.type) {
    case 'USERS_LOADED':
      const usersArray = []
      action.payload.forEach(user => usersArray.push(user))
      return state.concat(usersArray)
    default:
      return state
  }
}
