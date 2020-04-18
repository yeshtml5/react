/**
 * @file index.js
 * @brief Router>Provier>App 순으로 wrapping
 * @author 손완휘
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
//context
import {GlobalProvider} from 'context'
//pages
import App from './App'
//style
import 'styles/common.scss'
import 'styles/layout.scss'
import 'styles/swiper.scss'

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
