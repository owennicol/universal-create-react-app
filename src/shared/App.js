import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'

import Header from '../shared/components/Header'
import Home from '../shared/components/Home'
import PageNotFound from '../shared/components/PageNotFound'
import TestRouterPage from '../shared/components/TestRouterPage'

const App = () => (
  <div className='App'>
    <Route path='/' component={({ match }) => (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/test/:id' component={TestRouterPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    )} />
  </div>
)

export default App
