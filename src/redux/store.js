import { createStore } from 'redux'
import rootReducer from './reducers'

const store = {
  posts: []
}

export default createStore(rootReducer, store)
