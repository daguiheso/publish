import { createStore, compose } from 'redux'
import rootReducer from './reducers'

const store = {
  posts: []
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(rootReducer, store, composeEnhancers())
