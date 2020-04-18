/**
 * @title App.js
 */
import React, {useContext} from 'react'
//context
import {Context} from 'context'
//layout
import Layout from 'pages/common/layout'
//pages
import Route from './route'

const App = () => {
  //---------------------------------------------------------------------
  //context
  const context = useContext(Context)
  App.context = () => context

  return (
    <React.Fragment>
      <Route />
    </React.Fragment>
  )
}

export default App
//---------------------------------------------------------------------
/**
 * @title 글로벌변수
 * @example const context=useContext(Context) 와 동일
 */
export const Global = () => {
  return App.context()
}
