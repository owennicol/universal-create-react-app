import _some from 'lodash/some'
export default function reducer (state = [], action) {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      const isInBasket = _some(state, action.payload)
      if (!isInBasket) return [...state, action.payload]
      return state
    case 'DELETE_FROM_BASKET':
      const currentBasket = [...state]
      const indexToDelete = currentBasket.findIndex(item => (item.id === action.payload.id))
      return [
        ...currentBasket.slice(0, indexToDelete),
        ...currentBasket.slice(indexToDelete + 1)
      ]
    case 'DELETE_ITEMS':
      return []
    default:
      return state
  }
}
