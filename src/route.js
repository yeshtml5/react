/**
 * @title Router 목록들
 */
import React from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'
//Router
import Main from 'pages/main'
const ErrorPage = React.lazy(() => import('pages/common/error'))
//
export default () => {
  return (
    <React.Suspense
      fallback={
        <div className="loading">
          <span></span>
        </div>
      }>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/react" component={Main} />
        <Route exact path="/error" component={ErrorPage} />
        <Redirect to="/error" />
      </Switch>
    </React.Suspense>
  )
}
