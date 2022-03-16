import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../../src/styles/swipe.module.scss';

export default function SwiperTest() {
  return (
    <div className={styles.swipe}>
      <Swiper>
        <SwiperSlide>
          <img src="/img/banner-blog.jpeg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/banner-blog.jpeg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/banner-blog.jpeg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/banner-blog.jpeg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}