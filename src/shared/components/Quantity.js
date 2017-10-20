import React from 'react'

const Quantity = (props) => {
  const getQuantityOptions = (item) => (
    [...Array(props.max)].map((opt, index) => (
      <option key={`item-${item.id}-option-${item.id}-${index}`} value={index + 1}>{index + 1}</option>)
    )
  )
  const quantityOptions = getQuantityOptions(props.item)
  return (
    <div>
      <select className='form-control' defaultValue={props.item.quantity} onChange={props.onChange}>
        {quantityOptions}
      </select>
    </div>
  )
}

export default Quantity
