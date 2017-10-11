import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'

import App from '../shared/App'
import registerServiceWorker from './registerServiceWorker'
import reducers from '../shared/reducers'

import './index.css'

const history = createHistory()

const routeMiddleware = routerMiddleware(history)

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const store = createStore(reducers, window.__INITIAL_STATE__, composeEnhancers(applyMiddleware(thunk, routeMiddleware)))

ReactDOM.hydrate(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {App()}
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
