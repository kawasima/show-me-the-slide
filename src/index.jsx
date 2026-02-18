/* global document */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store, { runSaga, persistor } from './store'
import rootSaga from './sagas'
import App from './components/App'

runSaga(rootSaga)

const root = document.querySelector('#root')

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App/>
    </PersistGate>
  </Provider>, root
)
