import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { routerReducer, routerMiddleware, push } from 'react-router-redux'

import history from './history'
import * as reducers from './reducers/index'

const logger = store => next => action => {
  if(typeof action === 'function'){
    console.log('dispatching a function')
  }
  else{
    console.log('dispatching', action)
  }
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

// Build the middleware for intercepting and dispatching navigation actions
let middlewares = [
  logger,
  routerMiddleware(history),
]

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  enhancers,
  applyMiddleware(...middlewares)
)

// Now you can dispatch navigation actions from anywhere!
//store.dispatch(push('/about'))
export default store
