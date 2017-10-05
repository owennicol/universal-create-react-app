import App from '../shared/App'
import Home from '../shared/Home'
import TestRouterPage from '../shared/TestRouterPage'

const routes = [
  { component: App,
    routes: [
      { path: '/',
        exact: true,
        component: Home
      },
      { path: '/home',
        component: Home
      },
      { path: '/test',
        component: TestRouterPage
      }
    ]
  }
]

export default routes
