import React from 'react'
import { StaticRouter } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Context from 'react-context-component'

import reducers from '../shared/reducers'

import render from './render'
import App from '../shared/App'

const store = createStore(reducers, applyMiddleware(thunk))

const ErrorPage = () => <h1>Oops there was an error</h1>

const reactApp = (req, res) => {
  const context = {}
  let HTML
  let status = 200

  const setStatus = (newStatus) => {
    status = newStatus
  }

  try {
    HTML = render(
      <Context setStatus={setStatus}>
        <Provider store={store}>
          <StaticRouter context={{}} location={req.url}>
            <App />
          </StaticRouter>
        </Provider>
      </Context>
    )
  } catch (error) {
    HTML = render(ErrorPage)
    status = 500
  }

  if (context.url) {
    res.redirect(301, context.url)
  } else {
    res.status(status).send(HTML)
  }
}

export default reactApp
