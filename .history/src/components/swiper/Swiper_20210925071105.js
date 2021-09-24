// import Swiper core and required modules
import React from 'react';
import SwiperCore,{ Navigation, Pagination, Scrollbar, Autoplay, EffectFade,EffectCube} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../images/home/slidder1-min.jpg';
import slider2 from '../../images/home/slidder2-min.jpg';
import * as styles from './swiper.module.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([EffectFade,EffectCube,Autoplay])

const MySwiper = () => {
  
  return (
    <Swiper
      // install Swiper modules
      // modules={[Navigation, EffectCube,Pagination, Scrollbar,Autoplay]}
      
      //need to import the autoplay feature and put it in the modules b4 you can use it
      autoplay={{
        delay:3000 //delay the autoplay until the page is loaded
      }}
      spaceBetween={0}
      speed={1000}
      effect="cube"
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
      <SwiperSlide><img src={slider1} className={styles.img_box} alt="slider1" /></SwiperSlide>
      {/* <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
    </Swiper>
  );
};

export default MySwiper