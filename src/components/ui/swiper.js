/**
 * @title 스와이퍼
 * @example https://react-id-swiper.ashernguyen.site/example/default
 * @todos swiper 배경이미지할경우 !important 부분적으로 사용필요.
 */
import React from 'react'
import Swiper from 'react-id-swiper'
import styled from 'styled-components'
import {PUBLIC_URL} from 'context/config'
//style
import 'swiper/css/swiper.css' // Version >= 2.4.0

export default () => {
  let params = {
    lazy: true,
    loop: true,
    effect: 'fade',
    shouldSwiperUpdate: true, //업데이트될때마다 re-render
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

  //---------------------------------------------------------------------

  //---------------------------------------------------------------------
  return (
    <Content>
      <Swiper {...params}>
        <div
          className="ui-swiper"
          style={{
            backgroundImage: `url(${PUBLIC_URL()}/images/gallery/img1.jpg)`
          }}
        />
        <div
          className="ui-swiper"
          style={{
            backgroundImage: `url(${PUBLIC_URL()}/images/gallery/img2.jpg)`
          }}
        />
        <div
          className="ui-swiper"
          style={{
            backgroundImage: `url(${PUBLIC_URL()}/images/gallery/img3.jpg)`
          }}
        />
        <div
          className="ui-swiper"
          style={{
            backgroundImage: `url(${PUBLIC_URL()}/images/gallery/img4.jpg)`
          }}
        />
      </Swiper>
    </Content>
  )
}
//---------------------------------------------------------------------
const Content = styled.div`
  .ui-swiper {
    background-size: cover !important;
    background-position: center center !important;
  }
  .ui-swiper-thumb {
    width: 100px !important;
    height: 100px !important;
    background-size: cover !important;
    background-position: center center !important;
  }
`
