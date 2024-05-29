import React from 'react'
import BodyHead from './bodyHead'
import myImage2 from "./../assets/image3d.png"
import myImage from "./../assets/bg2.jpg"
import myImage3 from "./../assets/image1.svg"
import myImage4 from "./../assets/img5.png"
import myImage5 from "./../assets/XiawoSan.jpeg"
import myImage6 from "./../assets/tangClan.jpeg"
import myImage7 from "./../assets/tangSan.jpeg"
import myImage8 from "./../assets/nian1.jpeg"
import myImage9 from "./../assets/empress.jpeg"
import myImage10 from "./../assets/bing.jpeg"
import Slide from './slideop'

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Categories from './topCat'


function Body() {
    const slideOpt = [
        {
            img: <i className = 'fa-solid text-[#c04269] text4 font-[600] fa-book'> </i>,
            h3: "Novels",
            desc: "Check out our catalogue of novels arranged in an A to Z version "
        }, 
        {
            img: <i className = 'fa-solid text-[#c04269] text4 font-light fa-newspaper'> </i>,
            h3: "News forum",
            desc: "We provide to you latest news and happenings around the world"

        }, 
        {
            img: <i className = 'fa-solid text-[#c04269] text4 fa-tv '> </i>,
            h3: "Movies Fandom",
            desc: "Are you a movie fanatic?, check out our page where we review movies for fun"

        },
        {
            img: <i className = 'fa-solid text-[#c04269] text4 fa-newspaper font-light'> </i>,
            h3: "Research Articles",
            desc: "Documentaries of various reasearchs performed by researchers"
        }
    ]

    const listCat = [
        {
            h3: "Doluo dalu Series(Soul land)", 
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, recusandae ipsam necessitatibus aspernatur ab dignissimos iusto! Aliquid facilis consequatur sint, corporis repellendus tempore quam illum in suscipit perferendis eos dolorum quos natus magnam modi fuga reprehenderit nostrum ipsum. Deserunt, cum!",
            image: [<img src={myImage7} className='w-[300px] h-[450px] object-cover object-center' alt="" />, <img src={myImage5} className='w-[300px] h-[450px] object-cover object-center' alt="" />, <img src={myImage6} className='w-[300px] h-[450px] object-cover object-center' alt="" />]
        }, 
        {
            h3: "Magic Chef of ice and fire", 
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, recusandae ipsam necessitatibus aspernatur ab dignissimos iusto! Aliquid facilis consequatur sint, corporis repellendus tempore quam illum in suscipit perferendis eos dolorum quos natus magnam modi fuga reprehenderit nostrum ipsum. Deserunt, cum!",
            image: [<img src={myImage8} className='w-[300px] h-[450px] object-cover object-center' alt="" />, <img src={myImage9} className='w-[300px] h-[450px] object-cover object-center' alt="" />, <img src={myImage10} className='w-[300px] h-[450px] object-cover object-center' alt="" />]
        }
    ]

    const catSlide = listCat.map(cat =>  (<Categories h3={cat.h3} desc={cat.desc} image={cat.image}/>))

  return (
    <article>
        <section className='img1 h-[90vh]'>
            <BodyHead />
        </section>
        <section className='h-[90vh] sm:h-screen sm:p-[6em] flex items-center gap-[1em] justify-center flex-col pt-[2em] px-[1.5em] bg-[white]'>
            <div className='flex justify-center items-center text-center sm:text-left sm:flex-row sm:justify-between flex-col'>
                <h2 className='text-4xl text-[#c04269] font-[poppins] font-extrabold capitalize'>About <span className='block'>read league</span></h2>
                <p className='w-[90%] sm:w-[60%] font-[1.2rem] sm:mt-0 mt-[1em] font-[roboto] italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur molestias repellat sapiente doloribus eveniet rem culpa eos doloremque quisquam, repudiandae accusamus quam nemo fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, minus? Consectetur animi, exercitationem aperiam doloribus molestiae in voluptates maxime quasi.</p>
            </div>
            <div className='flex justify-center items-center w-[70%] gap-[2em] sm:hidden'>
                <i className='fa-solid fa-chevron-down text-4xl text-[#c04269] anime1 font-black text5'></i>
                <img src={myImage2} className='h-[250px] w-[200px]' alt="" />
                <i className='fa-solid fa-chevron-down text-4xl text-[#c04269] anime1 font-black text5'></i>
            </div>
            <div className='w-full hidden sm:flex h-[70%] bg-[#c04269] justify-between p-[1em] rounded-[1em]'>
                <img src={myImage} width={"30%"} height={"40%"} alt="" />
                <div className='bg-white w-[60%] rounded-[1em] flex items-center justify-between p-[2em]'>
                    <h2 className='text-4xl font-bold font-[poppins] text-[#c04269]'>The <span className='block'>Read League</span></h2>
                    <ul className='flex flex-col gap-[.5em] list relative mb-[2                     em]'>
                        <li><i className='fa-solid fa-circle-check text-green-600 mr-2'></i><a href="" className='node font-[lit] text-[black] text5 hover:underline'>News Forum</a></li>
                        <li><i className='fa-solid fa-circle-check text-green-600 mr-2'></i><a href="" className='node font-[lit] text-[black] text5 hover:underline'>Novels i.e Martial arts Novels</a></li>
                        <li><i className='fa-solid fa-circle-check text-green-600 mr-2'></i><a href="" className='node font-[lit] text-[black] text5 hover:underline'>Research Articles</a></li>
                        <li><i className='fa-solid fa-circle-check text-green-600 mr-2'></i><a href="" className='node font-[lit] text-[black] text5 hover:underline'>Sign Up Now!!!</a></li>
                        <li className='absolute flex items-center bottom-0 justify-between w-full top-[160px]'>
                            <div className='h-[50px] w-[50px] bg-[#fdba74] anime2 rounded-full '></div>
                            <div className='h-[60px] w-[60px] bg-[#c04269] rounded-full anime3'></div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section className='h-[90vh] bg2  bg-cover relative'>
            <div className='bgTrans2 w-full h-full sm:p-[4em] p-[2em] flex flex-col gap-[1.5em]'>
                <div className='text-center flex flex-col gap-[0.7em]'>
                    <h2 className='text-4xl capitalize font-[poppins] text-[white] font-extrabold'>Welcome to the league</h2>
                    <p className='text-[1.4rem] italic font-[mont] font-extrabold text4 text-[#c04269]'>An oasisi for reading</p>
                </div>

                <div className='w-full z-[20] flex justify-center flex-row items-center h-[100%] '>
                <Swiper
                    className='h-full w-[90%] hidden sm:flex  justify-between px-[4em] pt-[1em] items-center duration-[3s] mt-[0em]'
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={100}
                    slidesPerView={3}
                    navigation
                    autoplay = {{delay: 4000, disableOnInteraction: false}}
                    loop={true}
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    >
                    <SwiperSlide className=''><Slide image={slideOpt[0].img} h3={slideOpt[0].h3} desc={slideOpt[0].desc}/></SwiperSlide>
                    <SwiperSlide className=' '><Slide image={slideOpt[1].img} h3={slideOpt[1].h3} desc={slideOpt[1].desc}/></SwiperSlide>
                    <SwiperSlide className=' '><Slide image={slideOpt[2].img} h3={slideOpt[2].h3} desc={slideOpt[2].desc}/></SwiperSlide>
                    <SwiperSlide className=' '><Slide image={slideOpt[3].img} h3={slideOpt[3].h3} desc={slideOpt[3].desc}/></SwiperSlide>
                    </Swiper>

                    <Swiper
                    className='h-full sm3  w-[100%] sm:hidden p-[0.5em]'
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={-20}
                    slidesPerView={1}
                    // navigation
                    // loop={true}
                    autoplay = {{delay: 2000, disableOnInteraction: false}}
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    >
                    <SwiperSlide className='ml-[1.9em] sm2'><Slide image={slideOpt[0].img} h3={slideOpt[0].h3} desc={slideOpt[0].desc}/></SwiperSlide>
                    <SwiperSlide className='ml-[0.8em] sm2'><Slide image={slideOpt[1].img} h3={slideOpt[1].h3} desc={slideOpt[1].desc}/></SwiperSlide>
                    <SwiperSlide className='ml-[0.8em] sm2'><Slide image={slideOpt[2].img} h3={slideOpt[2].h3} desc={slideOpt[2].desc}/></SwiperSlide>
                    <SwiperSlide className='ml-[0.8em] sm2'><Slide image={slideOpt[3].img} h3={slideOpt[3].h3} desc={slideOpt[3].desc}/></SwiperSlide>
                    </Swiper>
                </div>
                <img src={myImage4} className='w-[20%] hidden sm:block absolute object-top h-[500px] object-cover right-[2em] top-[-1.5em]'  alt="" />
                {/* <div className='img3 h-[400px] left-[7em] top-[-2em] absolute w-[400px]'><div className='w-full h-full '></div></div> */}
            </div>
        </section>
        <section className='flex flex-col'>
        <h2 className='text-center mb-[0.5em] pt-[1em] text-[1.8rem] sm:text-4xl text-[#c04269] font-[poppins] capitalize font-bold'>Some of our top searched novels</h2>
            {catSlide}
        </section>
    </article>
  )
}

export default Body