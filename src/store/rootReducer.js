import { createBrowserHistory } from 'history'
import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'
import { taskReducer } from './reducers/taskReducer'

const history = createBrowserHistory()

const reducer = combineReducers({
  router: connectRouter(history),
  taskReducer,
})

export { history }

export default reducer
