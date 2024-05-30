import React from 'react'
import Search from './searchForm'
import myImage1 from "./../assets/girl1.png"
import myImage2 from "./../assets/image3d.png"  


function BodyHead() {
  return (
    <div className='h-full w-full bgTrans p-[2em] sm:p-[7em] flex flex-col items-center justify-center gap-[2.5em] sm:gap-[4em]'>
                <div className='flex flex-col sm:flex-row gap-[3em] sm:gap-[10em] relative items-center'>
                        <div className='text-center sm:text-center items-center justify-center flex flex-col gap-[1em] sm:w-[50%]'>
                            <p className='text-xl sm:text-2xl font-bold font-[work] text1 text-white '>Do you like reading books? </p>
                            <h1 className=' text1 text-orange-300 headText mb-[0.2em]block text-[3rem] sm:text-[3.5rem] capitalize font-[poppins] font-extrabold line'>Check out <span className='block'>read league!!! </span></h1>
                            <p className='font-[roboto] italic text-center sm:text-center z-[20] text-[white] text2 font-semibold '>Here at read league, you get to experience the best form of visualisation when reading. Our vast collection consists of research articles, latest news, novels and losts more!</p>
                        </div>
                        <div className=''>
                            {/* <div className=' hidden sm:block sm:w-[350px] h-[300px] bg-cover ask'></div> */}
                            <img src={myImage1} className='absolute ease-linear hidden anime4 sm:block top-[-50px] h-[350px] w-[350px] z-[0]' alt="" />
                            <Search header={true}/>
                        </div>
                        <img src={myImage2} className='absolute w-[300px] left-[-4em] sm:block hidden top-[11em] h-[400px]' alt="" />
                </div>
                <div >
                    <div className='bg-white h-[400px] w-[400px] hidden rounded-2xl bgPerson'>
                    </div>
                </div>
                <Search header={false}/>
            </div>
  )
}

export default BodyHead
