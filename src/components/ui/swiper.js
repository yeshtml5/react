/**
 * @title 스와이퍼
 * @example https://react-id-swiper.ashernguyen.site/example/default
 */
import React from 'react'
import Swiper from 'react-id-swiper'
import styled from 'styled-components'
//style
import 'swiper/css/swiper.css' // Version >= 2.4.0

export default () => {
  let params = {
    lazy: true,
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
    <Swiper {...params}>
      <div>
        <img src="https://source.unsplash.com/random" />
      </div>
      <div>
        <img src="https://source.unsplash.com/random" />
      </div>
      <div>
        <img src="https://source.unsplash.com/random" />
      </div>
      <div>
        <img src="https://source.unsplash.com/random" />
      </div>
      <div>
        <img src="https://source.unsplash.com/random" />
      </div>
      <div>
        <img src="https://source.unsplash.com/random" />
      </div>
    </Swiper>
  )
}
