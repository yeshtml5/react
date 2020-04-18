/**
 * @title 레이아웃
 */
import React from 'react'
import styled from 'styled-components'
//
export default () => {
  //---------------------------------------------------------------------
  //info
  const navi = [
    {title: 'Dashboard', link: '/dashboard'},
    {title: 'Dashboard', link: '/dashboard'},
    {title: 'Dashboard', link: '/dashboard'},
    {title: 'Dashboard', link: '/dashboard'},
    {title: 'Dashboard', link: '/dashboard'},
    {title: 'Dashboard', link: '/dashboard'}
  ]
  //---------------------------------------------------------------------
  //makeContents
  const makeContents = (info) => {
    const button = info.map((list, idx) => {
      const {title, link} = list
      return (
        <button
          key={idx}
          onClick={() => {
            alert(link)
          }}>
          <span>{title}</span>
        </button>
      )
    })
    const wrap = <section key={info}>{button}</section>
    return [wrap]
  }
  //---------------------------------------------------------------------
  return (
    <Nav>
      <h1>UI</h1>
      {makeContents(navi)}
      <h1>Hooks</h1>
      {makeContents(navi)}
    </Nav>
  )
}
//---------------------------------------------------------------------
const Nav = styled.nav`
  display: block;
  padding: 12px 20px;
  h1 {
    color: #6a7187;
    font-size: 16px;
    font-weight: 200;
  }
  section {
    display: block;
    margin-bottom: 30px;
  }
  button {
    display: block;
    padding: 10px 20px;
    color: #6a7187;
    font-size: 14px;
    font-weight: 300;
    background: transparent;
    :hover {
      color: #fff;
    }
  }
`
