import React from 'react'
import styled from 'styled-components'
//layout
import Layout from 'pages/common/layout/'
//components
import Swiper from 'components/ui/swiper'
import WebRTC from 'components/module/webRTC'

export default () => {
  return (
    <Layout>
      <h1>메인</h1>
      <Content>
        <WebRTC />
        <Swiper />
      </Content>
    </Layout>
  )
}

const Content = styled.div`
  position: relative;
  margin-top: 100px;

  .swiper-wrapper {
    div {
      width: 100%;
      background: #eee;
      height: 300px;
    }
  }
`
