import React from 'react'
import { Router, Route} from 'react-router'
import createBrowserHistory from 'history/createHashHistory'
const customHistory = createBrowserHistory()
import App from './App'

const Index = () => <div>index</div>
const About = () => <div>About</div>
export const renderRoutes = () => (
  <Router history={customHistory}>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/about" component={About}/>
      <Route path="/index" component={Index}/>
    </div>
  </Router>
)
