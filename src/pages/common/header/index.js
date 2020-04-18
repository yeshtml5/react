/**
 * @title 레이아웃
 */
import React from 'react'
//components
import Logo from './logo'
import Navi from './navi'

export default () => {
  //---------------------------------------------------------------------
  return (
    <header>
      {/* 로고 */}
      <Logo />
      {/* 네비게이션 */}
      <Navi />
    </header>
  )
}
