/* eslint-disable import/no-extraneous-dependencies */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import rootReducer, { history } from './rootReducer'
import rootSaga from './rootSaga'

const logger = createLogger({
  collapsed: true,
})

const routerMiddleware = createRouterMiddleware(history)
const sagaMiddleware = createSagaMiddleware()
const initialState = {}
const enhancers = []
const middlewares = [
  ...getDefaultMiddleware({
    thunk: false,
    serializableCheck: false,
    immutableCheck: { warnAfter: 300 },
  }),
  logger,
  routerMiddleware,
  sagaMiddleware,
]

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
  enhancers,
  preloadedState: initialState,
  devTools: { trace: true },
})

sagaMiddleware.run(rootSaga)

export { history }

export default store
