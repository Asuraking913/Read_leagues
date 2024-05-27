import React from 'react'
import { useState } from 'react'


function Slide({image, h3, desc}) {

    const [element, setImage] = useState("Movies Fandom")   
     
  if (h3 == element) {
    return ( 
		<div href='' className='h-[90%] sm:hidden flex gap-[1em] flex-col justify-center items-center w-[300px] bg-[#676c9a] hover:scale-105 duration-[0.5s] hover:bg-[#676c9aa8] border-white border-[2px] rounded-2xl '>
		<p className='border-white border-2 text-2xl rounded-[5px] px-[5px] '>{image}</p>
		<h3 className='font-[poppins] font-bold font text4'>{h3}</h3>
		<p className='w-[20ch] text-center font-[roboto] text-white text1'>{desc}</p>
		<a href="" className='font-[poppins] text1 hover:underline underline-offset-8 text-[#e8babb]'>
		  Read More!! <hr />
		</a>
  </div>
    )
  }

  return (
    <div href='' className='h-[90%] hidden sm:flex gap-[1em] flex-col justify-center items-center w-[300px] bg-[#676c9a] hover:scale-105 duration-[0.5s] hover:bg-[#676c9af1] border-white border-[2px] rounded-2xl '>
          <p className='border-white border-2 text-2xl rounded-[5px] px-[5px] '>{image}</p>
          <h3 className='font-[poppins] font-bold font text4'>{h3}</h3>
          <p className='w-[20ch] text-center font-[roboto] text-white text1'>{desc}</p>
          <a href="" className='font-[poppins] text1 hover:underline underline-offset-8 text-[#e8babb]'>
            Read More!! <hr />
          </a>
    </div>
  )
}

export default Slide