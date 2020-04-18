/**
 * @title 레이아웃
 */
import React from 'react'
//layout
import Header from 'pages/common/header'
import Footer from 'pages/common/footer'
//
const Layout = (props) => {
  const {children} = props
  //---------------------------------------------------------------------
  return (
    <React.Fragment>
      {/* Header */}
      <Header />
      {/* Contents */}
      <main>
        <article>{children}</article>
        {/* Footer */}
        <Footer />
      </main>
    </React.Fragment>
  )
}
export default Layout
