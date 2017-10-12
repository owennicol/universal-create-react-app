import React from 'react'
import { connect } from 'react-redux'

const Basket = (props) => {
  return (
    <div className='basket'>
      <h4>Basket</h4>
      {props.basket.map((item, key) => (<p key={`basket-item-${item.id}-${item.name}`}>{item.name}</p>))}
    </div>
  )
}

function mapStateToProps (state, ownProps) {
  return {basket: state.basket}
}

function mapDispatchToProps (dispatch, ownProps) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket)
