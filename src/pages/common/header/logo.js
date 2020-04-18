import React from 'react'
import styled from 'styled-components'
//static
import react from 'static/svg/react_logo.svg'
//
export default function Logo() {
  //---------------------------------------------------------------------

  return (
    <Title className="vertical-align-middle">
      <i>
        <img src={react} />
      </i>
      <span>React library</span>
    </Title>
  )
}
//---------------------------------------------------------------------
const Title = styled.div`
  display: block;
  padding: 30px 0;
  color: #fff;
  font-size: 1.8rem;
  text-align: center;

  span {
    padding-right: 20px;
    line-height: 2rem;
  }

  img {
    width: 40px;
    height: 40px;
    animation: loading 5s linear infinite;

    @keyframes loading {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`
