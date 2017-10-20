export default function reducer (state = [], action) {
  switch (action.type) {
    case 'FETCH_ITEMS':
      const itemsArray = []
      action.payload.forEach(item => {
        item.quantity = 1
        itemsArray.push(item)
      })
      return [...itemsArray]
    case 'DELETE_ITEMS':
      return []
    case 'CHANGE_ITEM_QUANTITY':
      const {item, quantity} = action.payload
      const currentItems = [...state]
      const indexOfItem = currentItems.findIndex(obj => (obj.id === item.id))
      return [
        ...currentItems.slice(0, indexOfItem),
        Object.assign({}, item, {
          quantity: Number(quantity)
        }),
        ...currentItems.slice(indexOfItem + 1)
      ]
    default:
      return state
  }
}
