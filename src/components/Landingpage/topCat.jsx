import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';


function Categories({h3, desc, image}) {

  if (h3 === "Doluo dalu Series(Soul land)") {
    return (
      <div className='bg-[white] pt-[0em] p-[1.5em] sm:p-[2em]'>
                  
                      <div className='bgImg bg-contain bg-[#c04269]'>
                      <div className='bg-[#c0426a46] p-[2em] sm:p-[1em] h-full w-full text-center items-center flex flex-col sm:flex-row justify-center gap-[0em] sm:gap-[12em]'>
                        <div className=' h-[100%] rounded-2xl bg-[#c0426abb] border-2 border-white flex items-center justify-center flex-col p-[0.5em] gap-[1em]'>
                            <h3 className='font-[lit] capitalize text-white text-3xl w-[80%]'>{h3}</h3>
                            <p className='w-[30ch] text-white font-[poppins] italic'>{desc}</p>
                            <a href="" className='font-[lit] text-[1.2em] animate-bounce hover:animate-none text5 text-red-400'>Go to Chapter list</a>
                        </div>
                            <div className='p-[2em]'>
                            <Swiper
                            className='sm:w-[250px] w-[300px] border-2 border-white h-[400px] sm:h-[350px] rounded-[2em] bg-white'
                    // install Swiper modules
                    // modules={[Navigation, Pagination, Scrollbar, A11y]}
                    modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    // navigation
                    autoplay={{delay: 3500, disableOnInteraction: false}}
                    loop={true}
                    // pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    >

                    <SwiperSlide className=''>{image[0]}</SwiperSlide>
                    <SwiperSlide className=''>{image[1]}</SwiperSlide>
                    <SwiperSlide className=''>{image[2]}</SwiperSlide>
                                       </Swiper>
                            </div>
                      </div>
                      </div>
      </div>
    )
  }

  else {
    return (
      <div className='bg-[white] pt-[0em] rounded-2xl p-[1.5em] sm:p-[2em]'>
                  
                      <div className='bgImg1 bg-contain sm: bg-[#c04269]'>
                      <div className='bg-[#c0426a46] p-[2em] sm:p-[1em] h-full w-full text-center items-center flex flex-col sm:flex-row justify-center gap-[0em] sm:gap-[12em]'>
                        <div className=' h-[100%]  rounded-2xl bg-[#c0426abb] border-2 border-white flex items-center justify-center flex-col p-[0.5em] gap-[0.5em]'>
                            <h3 className='font-[lit] capitalize text-white text-3xl w-[80%]'>{h3}</h3>
                            <p className='w-[30ch] text-white font-[poppins] italic'>{desc}</p>
                            <a href="" className='font-[lit] text5 text-[1.2em] animate-bounce hover:animate-none text-red-400'>Go to Chapter list</a>
                        </div>
                            <div className='p-[2em]'>
                            <Swiper
                            className='sm:w-[250px] w-[300px] border-2 border-white h-[400px] sm:h-[350px] rounded-[2em] bg-white'
                    // install Swiper modules
                    // modules={[Navigation, Pagination, Scrollbar, A11y]}
                    modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    // navigation
                    autoplay={{delay: 3500, disableOnInteraction: false}}
                    loop={true}
                    // pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    >

                    <SwiperSlide className=''>{image[0]}</SwiperSlide>
                    <SwiperSlide className=''>{image[1]}</SwiperSlide>
                    <SwiperSlide className=''>{image[2]}</SwiperSlide>
                                       </Swiper>
                            </div>
                      </div>
                      </div>
      </div>
    )
  }

  
}

export default Categories