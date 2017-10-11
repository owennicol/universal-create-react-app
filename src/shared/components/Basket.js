import React from 'react'
import { connect } from 'react-redux'

const Basket = (props) => {
  return (
    <div className='basket'>
      <p>BASKET</p>
    </div>
  )
}

function mapStateToProps (state, ownProps) {
  return {}
}

function mapDispatchToProps (dispatch, ownProps) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket)
