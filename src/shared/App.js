import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'

import Basket from '../shared/components/Basket'
import Header from '../shared/components/Header'
import Nav from '../shared/components/Nav'
import Home from '../shared/components/Home'
import PageNotFound from '../shared/components/PageNotFound'
import TestRouterPage from '../shared/components/TestRouterPage'
import ItemList from '../shared/components/ItemList'

const App = () => (
  <div className='App'>
    <Route path='/' component={({ match }) => (
      <div>
        {Header()}
        {Nav()}
        <Basket />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/test/:id' component={TestRouterPage} />
          <Route exact path='/items' component={ItemList} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    )} />
  </div>
)

export default App
