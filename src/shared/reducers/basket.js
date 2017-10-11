export default function reducer (state = [], action) {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return [...state, action.payload]
    default:
      return state
  }
}
