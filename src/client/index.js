import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { renderRoutes } from 'react-router-config'

import reducers from '../shared/reducers' // Or wherever you keep your reducers
import routes from '../client/routes'

import registerServiceWorker from './registerServiceWorker'
import './index.css'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  window.__INITIAL_STATE__,
  applyMiddleware(middleware)
)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {renderRoutes(routes)}
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
