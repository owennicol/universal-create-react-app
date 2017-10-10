import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'

import asyncComponent from '../shared/components/AsyncComponent'
import Header from '../shared/components/Header';

const AsyncHome = asyncComponent(() => import('../shared/components/Home'))
const AsyncPageNotFound = asyncComponent(() => import('../shared/components/PageNotFound'))
const AsyncTestRouterPage = asyncComponent(() => import('../shared/components/TestRouterPage'))

const App = () => (
  <div className='App'>
    <Route path='/' component={({ match }) => (
      <div>
        <Header />
        <p>Fish and chicken</p>
        <Switch>
          <Route exact path='/' component={AsyncHome} />
          <Route exact path='/test/:id' component={AsyncTestRouterPage} />
          <Route component={AsyncPageNotFound} />
        </Switch>
      </div>
    )} />
  </div>
)

export default App
