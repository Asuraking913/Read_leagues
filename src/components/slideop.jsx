import React from 'react'
import { useState } from 'react'


function Slide({image, h3, desc}) {


   

  return (
    <div href='' className='h-[90%] sm2 flex sm:flex gap-[1em] flex-col justify-center items-center w-[300px] bg-[#c0426a93] hover:scale-105 duration-[0.5s] hover:bg-[#fdbb74a2] border-white border-[2px] rounded-2xl '>
          <p className='border-white border-2 text-2xl rounded-[5px] px-[5px] '>{image}</p>
          <h3 className='font-[poppins] text-[#676c9af1] font-bold font text6'>{h3}</h3>
          <p className='w-[20ch] text-center font-[roboto] text-white text1'>{desc}</p>
          <a href="" className='font-[poppins] text6 font-bold hover:underline underline-offset-8 text-[#676c9af1]'>
            Read More!! <hr />
          </a>
    </div>
  )
}

export default Slide