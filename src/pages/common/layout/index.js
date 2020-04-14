/**
 * @title 레이아웃
 */
import React from 'react'
//layout
import Header from 'pages/common/header'

const Layout = (props) => {
  const {children} = props
  //---------------------------------------------------------------------
  return (
    <React.Fragment>
      {/* Header */}
      <Header />
      <article>{children}</article>
    </React.Fragment>
  )
}
export default Layout
