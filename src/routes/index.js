import express from 'express'

import React from 'react'
import { renderToString } from 'react-dom/server'

import StaticRouter from 'react-router-dom/StaticRouter'
import { matchRoutes, renderRoutes } from 'react-router-config'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import routes from '../client/routes'
import reducers from '../shared/reducers'

const router = express.Router()

const store = createStore(reducers, applyMiddleware(thunk))

router.get('*', (req, res) => {
  const branch = matchRoutes(routes, req.url)
  const promises = branch.map(({ route }) => {
    let fetchData = route.component.fetchData
    return fetchData instanceof Function ? fetchData(store) : Promise.resolve(null)
  })
  return Promise.all(promises).then((data) => {
    let context = {}
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    )
    res.render('index', { title: 'Express', data: false, content })
  })
})

module.exports = router
