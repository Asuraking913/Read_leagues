import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [nav, setNav] = useState(false) 

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='color1 p-[.8em] sm:p-[0.5em] sm:px-[1.5em] flex items-center justify-between'>
        <Link to="/"><a href="#" className="text-[2rem] font-[doodle] text-white">Rleague</a></Link>
        <i onClick={handleNav} className='fa-solid fa-bars font-bold text-[white] hover:animate-spin hover:scale-125 duration-[0.5s] text-[2em] sm:hidden block'></i>

    {
      nav ? <nav className='sm:block'>
              <ul className='sm:gap-[2em] gap-[1em] w-full h-screen flex flex-col justify-center items-center fixed right-[0em] z-[40] bg-[#c04269] top-0 sm:flex sm:items-center sm:justify-center'>
                <i onClick={() => {setNav(!nav)}} className='fa-solid fa-x text-4xl hover:animate-spin absolute top-0 right-0 p-[.3em] text-white'></i>
                <Link to="/">
                  <li className='hover:scale-110 duration-[0.5s] px-[5em] rounded-[2em] shadow-md shadow-purple-900 hover:shadow-purple-400 bg-[#ffffffe8] py-[1em] flex justify-center w-[300px]'><a href="" className='font-bold font-[OFL] text-white text5 text-[1.2rem] ml-[.5em]'>Home</a></li>
                </Link>
                <Link to="/about">
                  <li className='hover:scale-110 duration-[0.5s] px-[5em] rounded-[2em] shadow-md shadow-purple-900 hover:shadow-purple-400 bg-[#ffffffe8] py-[1em] flex justify-center w-[300px]'><a href="" className=' font-bold font-[OFL] text-white text5 text-[1.2rem] ml-[.5em]'>About Us</a></li>
                </Link>
                <li className='hover:scale-110 duration-[0.5s] px-[5em] rounded-[2em] shadow-md shadow-purple-900 hover:shadow-purple-400 bg-[#ffffffe8] py-[1em] flex justify-center w-[300px]'><a href="" className=' font-bold font-[OFL] text-white text5 text-[1.2rem] ml-[.5em]'>Authors</a></li>
                <li className='hover:scale-110 duration-[0.5s] px-[5em] rounded-[2em] shadow-md shadow-purple-900 hover:shadow-purple-400 bg-[#ffffffe8] py-[1em] flex justify-center w-[300px]'><a href="" className=' font-bold font-[OFL] text-white text5 text-[1.2rem] ml-[.5em]'>Contact Us</a></li>
                <Link to="/login">
                  <li className='hover:scale-110 duration-[0.5s] px-[5em] rounded-[2em] shadow-md shadow-purple-900 hover:shadow-purple-400 bg-[#ffffffe8] py-[1em] flex justify-center w-[300px]'><a href=""  className=' font-bold font-[OFL] text-white text5 text-[1.2rem] ml-[.5em]'>Sign In/Sign Up</a></li>
                </Link>
              </ul>
            </nav>
          :
          <nav className='hidden sm:block'>
            <ul className='gap-[2em] list-none sm:flex items-center justify-center hiddeb'>
              <Link to="/">
                <li className='hover:scale-110 duration-[0.5s]'><a href="" className='font-bold font-[OFL] text-white text1 text-[1.3rem] ml-[.5em]'>Home</a></li>
              </Link>
              <Link to="/about">
                <li className='hover:scale-110 duration-[0.5s]'><a href="" className=' font-bold font-[OFL] text-white text1 text-[1.3rem] ml-[.5em]'>About Us</a></li>
              </Link>
                <Link to="/profile">
                  <li className='hover:scale-110 duration-[0.5s]'><a href="" className=' font-bold font-[OFL] text-white text1 text-[1.3rem] ml-[.5em]'>Authors</a></li>
                </Link>
              <li className='hover:scale-110 duration-[0.5s]'><a href="" className=' font-bold font-[OFL] text-white text1 text-[1.3rem] ml-[.5em]'>Contact Us</a></li>
              <Link to="/login">
                <li className='hover:scale-110 duration-[0.5s]'><a  className=' font-bold font-[OFL] text-white text1 text-[1.2rem] ml-[.5em]'>Sign In/Sign Up</a></li>
              </Link>
            </ul>
        </nav>
    }

    </div>
  )
}

export default Header