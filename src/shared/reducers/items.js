export default function reducer (state = [], action) {
  switch (action.type) {
    case 'FETCH_ITEMS':
      const itemsArray = []
      action.payload.forEach(item => {
        item.quantity = 1
        itemsArray.push(item)
      })
      return [].concat(itemsArray)
    case 'DELETE_ITEMS':
      return []
    default:
      return state
  }
}
