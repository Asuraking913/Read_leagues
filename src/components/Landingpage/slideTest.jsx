import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination, Scrollbar} from 'swiper/modules'

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import '../fonts/swiper.min.css';

function SlideTest() {
    return (
        <Swiper
        className='p-4 h-[60vh] bg-slate-300'
        modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={50}
          navigation
          pagination={{ clickable: true }}
          slidesPerView={2}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay = {4}
        >
          <SwiperSlide className='flex items-center justify-center bg-red-500 w-[200px] h-[200px]'>Slide 1</SwiperSlide>
          <SwiperSlide className='flex items-center justify-center bg-red-500 w-[200px] h-[200px]'>Slide 2</SwiperSlide>
          <SwiperSlide className='flex items-center justify-center bg-red-500 w-[200px] h-[200px]'>Slide 3</SwiperSlide>
          <SwiperSlide className='flex items-center justify-center bg-red-500 w-[200px] h-[200px]'>Slide 4</SwiperSlide>
         
        </Swiper>
      );
}

export default SlideTest