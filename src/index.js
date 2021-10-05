import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import myReducer from 'reducers/myReducer'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import thunk from 'redux-thunk'
import './i18n'

const persistConfig = {
  key: 'root',
  storage: storage,
  // HERE YOU MAKE YOUR REDUCERS PERSISTENT
  whitelist: ['reducerNameIWantToUseInComponents'],
  stateReconciler: autoMergeLevel2,
}

const rootReducer = combineReducers({
  // HERE YOU CAN ADD ALL OF YOUR REDUCERS
  reducerNameIWantToUseInComponents: myReducer,
})

// HIDE REDUCER FROM REACT DEVTOOLS IN PRODUCTION
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  persistReducer(persistConfig, rootReducer),
  composeEnhancers(applyMiddleware(thunk)),
)

const persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
)
