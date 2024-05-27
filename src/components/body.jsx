import React from 'react'
import Search from './searchForm'
import myImage from "./../assets/bg2.jpg"
import myImage1 from "./../assets/girl1.png"
import myImage2 from "./../assets/image3d.png"
import myImage3 from "./../assets/image1.svg"
import myImage4 from "./../assets/img5.png"
import Slide from './slideop'



function Body() {
    const slideOpt = [
        {
            img: <i className = 'fa-solid text-[#e8babb] text1 font-[600] fa-book'> </i>,
            h3: "Novels",
            desc: "Check out our catalogue of novels arranged in an A to Z version "
        }, 
        {
            img: <i className = 'fa-solid text-[#e8babb] text1 font-light fa-newspaper'> </i>,
            h3: "News forum",
            desc: "We provide to you latest news and happenings around the world"

        }, 
        {
            img: <i className = 'fa-solid text-[#e8babb] text1 fa-tv '> </i>,
            h3: "Movies Fandom",
            desc: "Are you a movie fanatic?, check out our page where we review movies for fun"

        },
        {
            img: <i className = 'fa-solid text-[#e8babb] text1 fa-newspaper font-light'> </i>,
            h3: "Research Articles",
            desc: "Documentaries of various reasearchs performed by researchers"
        }
    ]

    const listSlide = slideOpt.map(slide => (<Slide image={slide.img} h3={slide.h3} desc={slide.desc}/>))

  return (
    <article>
        <section className='img1 h-[90vh]'>
            <div className='h-full w-full bgTrans p-[2em] sm:p-[7em] flex flex-col items-center justify-center gap-[2.5em] sm:gap-[4em]'>
                <div className='flex flex-col sm:flex-row gap-[3em] sm:gap-[10em] relative items-center'>
                        <div className='width-[40%] text-center sm:text-center items-center justify-center flex flex-col gap-[1em] sm:w-[40%]'>
                            <p className='text-xl sm:text-2xl font-bold font-[work] text1 text-white '>Do you like reading books? </p>
                            <h1 className=' text1 text-orange-300 mb-[0.2em]block text-[2.5rem] capitalize font-[poppins] font-extrabold line'>Check out <span className='block'>read league!!! </span></h1>
                            <p className='font-[roboto] italic text-center sm:text-center z-[20] text-[white] text2 font-semibold '>Here at read league, you get to experience the best form of visualisation when reading. Our vast collection consists of research articles, latest news, novels and losts more!</p>
                        </div>
                        <div className=''>
                            {/* <div className=' hidden sm:block sm:w-[350px] h-[300px] bg-cover ask'></div> */}
                            <img src={myImage1} className='absolute ease-linear hidden anime4 sm:block top-[-50px] h-[350px] w-[350px] z-[0]' alt="" />
                            <Search header={true}/>
                        </div>
                        <img src={myImage2} className='absolute w-[300px] left-[-5em] sm:block hidden top-[10em] h-[400px]' alt="" />
                </div>
                <div >
                    <div className='bg-white h-[400px] w-[400px] hidden rounded-2xl bgPerson'>
                    </div>
                </div>
                <Search header={false}/>
            </div>
        </section>
        <section className='h-[90vh] sm:h-screen sm:p-[6em] flex items-center gap-[1em] flex-col pt-[2em] px-[1.5em] bg-[white]'>
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
                    <p className='text-[1.2rem] italic font-[lit] text5 text-red-200'>An oasisi for reading</p>
                </div>

                <div className='w-full z-[20] flex justify-center flex-row items-center gap-[2em] h-[100%] '>
                    
                    {listSlide}
                </div>
                <img src={myImage4} className='w-[20%] hidden sm:block absolute object-top h-[520px] object-cover right-[2em] top-[-1.5em]'  alt="" />
            </div>
        </section>
    </article>
  )
}

export default Body