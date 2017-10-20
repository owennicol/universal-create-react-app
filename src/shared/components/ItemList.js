import React from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import _some from 'lodash/some'

import { fetchItems, deleteItems, changeItemQuantity } from '../actions/items'
import { addToBasket, deleteFromBasket } from '../actions/basket'

const getQuantityOptions = (item) => (
  [...Array(10)].map((opt, index) => (
    <option key={`item-${item.id}-option-${item.id}-${index}`} value={index + 1}>{index + 1}</option>)
  )
)

const ItemList = (props) => {
  const itemIsInBasket = (item) => _some(props.basket, item)

  return (
    <div className='App-intro container'>
      <Helmet>
        <title>Item List</title>
      </Helmet>
      {!props.items.length &&
        <p>
          <button className='btn btn-success' onClick={props.fetchItems}>
            Fetch items
          </button>
        </p>
      }
      {props.items.length > 0 &&
        <div style={{ 'overflow': 'scroll' }}>
          <p>
            <button className='btn btn-danger' onClick={props.deleteItems}>
              Delete items
            </button>
          </p>
          <table className='table table-striped table-bordered table-sm'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Quantity</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {props.items.map((item, index) => {
                const quantityOptions = getQuantityOptions(item)
                return (
                  <tr key={`item${item.id}-${index}`}>
                    <td>
                      {item.name}
                    </td>
                    <td>
                      {item.username}
                    </td>
                    <td>
                      {item.email}
                    </td>
                    <td>
                      <select defaultValue={item.quantity} onChange={(e) => props.changeItemQuantity(item, e.target.value)}>
                        {quantityOptions}
                      </select>
                    </td>
                    <td>
                      {!itemIsInBasket(item) &&
                        <button
                          className='btn btn-block btn-success'
                          onClick={() => props.addToBasket(item)}>
                          Add to basket
                        </button>
                      }
                      {itemIsInBasket(item) &&
                        <button
                          className='btn btn-block btn-danger'
                          onClick={() => props.deleteFromBasket(item)}>
                          Delete from basket
                        </button>
                      }
                    </td>
                  </tr>
                )
              }
              )}
            </tbody>
          </table>
        </div>
      }
    </div>
  )
}

function mapStateToProps (state, ownProps) {
  return {
    items: state.items,
    basket: state.basket
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    fetchItems: () => dispatch(fetchItems()),
    deleteItems: () => dispatch(deleteItems()),
    addToBasket: (item) => dispatch(addToBasket(item)),
    deleteFromBasket: (item) => dispatch(deleteFromBasket(item)),
    changeItemQuantity: (item, quantity) => dispatch(changeItemQuantity(item, quantity))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
