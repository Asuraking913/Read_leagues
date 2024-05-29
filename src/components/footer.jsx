import React from 'react'

function Foot() {
  return (
    <div className='h-[auto] bg-[#c04269] '>
        <div>
            <ul className='flex justify-between py-[2em] px-[4em]'>
                <li><a href="" className='text-3xl font-[poppins] font-bold'>About Us</a></li>
                <li><a href="" className='text-3xl font-[poppins] font-bold'>Feed Back</a></li>
                <li><a href="" className='text-3xl font-[poppins] font-bold' >Community</a></li>
            </ul>
            <ul className='flex gap-[3em] p-[1em] justify-center'>
              <li><a href=""><i className='text-[2.5rem] fa-brands fa-facebook '></i></a></li>
              <li><a href=""><i className='text-[2.5rem] fa-brands fa-instagram'></i></a></li>
              <li><a href=""><i className='text-[2.5rem] fa-brands fa-square-x-twitter'></i></a></li>
              <li><a href=""><i className='text-[2.5rem] fa-brands fa-x-twitter'></i></a></li>
              <li><a href=""><i className='text-[2.5rem] fa-brands fa-instagram'></i></a></li>
            </ul>
            <hr />
        </div>
        <h3><i className='fa-solid fa-copy'></i>RLeague Global Inc</h3>
    </div>
  )
}

export default Foot