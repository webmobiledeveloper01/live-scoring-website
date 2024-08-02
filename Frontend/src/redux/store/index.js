import { createStore, applyMiddleware, compose } from 'redux'
import { thunk } from 'redux-thunk'
import rootReducer from '../reducers'

// Initial state
const initialState = {}

// Thunk Middleware
const middleware = [thunk]

// const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
//Create the store
const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware))
)

export default store
