import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import items from './items'
import basket from './basket'

const rootReducer = combineReducers({
  items,
  basket,
  routing: routerReducer
})
export default rootReducer
