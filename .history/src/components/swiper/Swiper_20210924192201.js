// import Swiper core and required modules
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../images/home/slidder1-min.jpg';
import slider2 from '../../images/home/slidder2-min.jpg';
import * as styles from './swiper.module.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const MySwiper = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      autoplay={
      loop={true}
      speed={500}
      // spaceBetween={50}
      slidesPerView={1}
      

      // navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={slider1} className={styles.img_box} alt="slider1" /></SwiperSlide>
      <SwiperSlide><img src={slider2} className={styles.img_box} alt="slider2" /></SwiperSlide>
      {/* <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
    </Swiper>
  );
};

export default MySwiper