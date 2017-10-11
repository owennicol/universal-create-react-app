import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import users from './users'
import basket from './basket'

const rootReducer = combineReducers({
  users,
  basket,
  routing: routerReducer
})
export default rootReducer
