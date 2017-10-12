export default function reducer (state = [], action) {
  switch (action.type) {
    case 'FETCH_USERS':
      const usersArray = []
      action.payload.forEach(user => usersArray.push(user))
      return [].concat(usersArray)
    case 'DELETE_USERS':
      return []
    default:
      return state
  }
}
