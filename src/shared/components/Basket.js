import React from 'react'
import { connect } from 'react-redux'
import { deleteFromBasket } from '../actions/basket'

const Basket = (props) => {
  if (!props.basket.length) return null
  return (
    <div className='basket'>
      <h4>Basket</h4>
      {props.basket.map((item, key) => {
        return (
          <div className='basket-item' key={`basket-item-${item.id}-${item.name}`}>
            <span className='basket-name'>{item.name}&nbsp;&times;&nbsp;{item.quantity}</span>
            <button type='button' className='close text-danger' aria-label='Close' onClick={() => props.deleteFromBasket(item)}>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
        )
      })
      }
    </div>
  )
}

function mapStateToProps (state, ownProps) {
  return {
    basket: state.basket
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    deleteFromBasket: (user) => dispatch(deleteFromBasket(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket)
