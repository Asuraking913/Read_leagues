import React from 'react'


function Header() {
  return (
    <div className='color1 p-[.8em] sm:p-[0.5em] sm:px-[1.5em] flex items-center justify-between'>
        <a href="#" className="text-[2rem] font-[doodle] text-white">Rleague</a>
        <i className='fa-solid fa-bars font-bold text-[white] hover:scale-125 duration-[0.5s] text-[2em] sm:hidden block'></i>
        <nav className='hidden sm:block'>
            <ul className='gap-[2em] list-none sm:flex items-center justify-center hidden'>
              <li className='hover:scale-110 duration-[0.5s]'><a href="" className='font-bold font-[OFL] text-white text1 text-[1.3rem] ml-[.5em]'>Home</a></li>
              <li className='hover:scale-110 duration-[0.5s]'><a href="" className=' font-bold font-[OFL] text-white text1 text-[1.3rem] ml-[.5em]'>About Us</a></li>
              <li className='hover:scale-110 duration-[0.5s]'><a href="" className=' font-bold font-[OFL] text-white text1 text-[1.3rem] ml-[.5em]'>Authors</a></li>
              <li className='hover:scale-110 duration-[0.5s]'><a href="" className=' font-bold font-[OFL] text-white text1 text-[1.3rem] ml-[.5em]'>Contact Us</a></li>
              <li className='hover:scale-110 duration-[0.5s]'><a href="" className=' font-bold font-[OFL] text-white text1 text-[1.3rem] ml-[.5em]'>Sign In/Sign Up</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header