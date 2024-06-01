import React from 'react'
import Header from '../Landingpage/header'
import { useState } from 'react'

function Loginpage() {

  const [signIn, setSignIn] = useState(true);

  const handleSignIn = () => {
    setSignIn(!signIn)
  }

  const handleSignUp = () => {
    setSignIn(!signIn)
  }


  return (
    
    signIn ? <>
              <Header />
                <div className='h-screen w-full logBg bg-cover'>
                  <div className='h-screen w-full bg-[#0000008c] flex justify-center items-center'>
                    <form action="" className='bg-[#c04269] pt-0 shadow-lg shadow-black sm:w-[25%] w-[65%] rounded-[1.5em] pr-[2em] pb-[1em] py-[3em] flex flex-col border-2 border-[white] outline-white outline-4 px-[1em]'>
                      <p href="#" className="text-[2rem] p-[1em] text-center font-[doodle] text-white">Rleague</p>
                      <div className='flex flex-col mb-[2em]'>
                        <label htmlFor="Username" className='font-[poppins] text-[1.2em] font-bold text-[white] text1'>Username</label>
                        <input className='outline-none text-white bg-transparent border-b-2 focus:mt-[1em] duration-[0.5s] border-[white]' type="text" Username="Username" id="name" />
                      </div>
                      <div className='flex flex-col mb-[2em]'>
                        <label htmlFor="password" className='font-[poppins] text-[1.2em] font-bold text-[white] text1'>Password</label>
                        <input className='outline-none text-white bg-transparent border-b-2 focus:mt-[1em] duration-[0.5s] border-[white]' type="password" name="password" id="passwordSignIn" />
                      </div>
                      <button  className='bg-white py-[0.7em] px-[-5em] rounded-[1em] shadow-md hover:shadow-purple-600 hover:scale-105 duration-[0.5s] shadow-purple-800 mb-[1em] text-[1.2em] font-[poppins] font-bold text-[#c04269] text5' type="submit">Sign In</button>
                      <hr className='mb-[1em]'/>
                      <p className='font-[baba] text-white text1 mb-[1em] text-center '>Don't have an account with us?</p>
                      <button onClick={handleSignUp} className='bg-white py-[0.7em] px-[-5em] rounded-[1em] shadow-md hover:shadow-purple-600 hover:scale-105 duration-[0.5s] shadow-purple-800 mb-[1em] text-[1em] font-[poppins] font-bold text-[#c04269] text5'>Sign Up With Us</button>
                    </form>
                      </div>
                  </div>
            </>
            :

            <>
            <Header />
              <div className='logBg h-screen w-full bg-cover'>
                  <div className='h-screen w-full bg-[#0000008c] flex justify-center items-center'>
                      <form action="" className='bg-[#c04269] pt-0 shadow-lg shadow-black sm:w-[25%] w-[65%] rounded-[1.5em] pr-[2em] pb-[1em] py-[3em] flex flex-col border-2 border-[white] outline-white outline-4 px-[1em]'>
                      <p href="#" className="text-[2rem] p-[1em] text-center font-[doodle] text-white">Rleague</p>
                      <div className='flex flex-col mb-[2em]'>
                        <label htmlFor="Username" className='font-[poppins] text-[1.2em] font-bold text-[white] text1'>Username</label>
                        <input className='outline-none text-white bg-transparent border-b-2 focus:mt-[1em] duration-[0.5s] border-[white]' type="text" name="username" id="username" />
                      </div>
                      <div className='flex flex-col mb-[2em]'>
                        <label htmlFor="Username" className='font-[poppins] text-[1.2em] font-bold text-[white] text1'>Email</label>
                        <input className='outline-none text-white bg-transparent border-b-2 focus:mt-[1em] duration-[0.5s] border-[white]' type="email" name="email" id="email" />
                      </div>
                      <div className='flex flex-col mb-[2em]'>
                        <label htmlFor="password" className='font-[poppins] text-[1.2em] font-bold text-[white] text1'>Password</label>
                        <input className='outline-none text-white bg-transparent border-b-2 focus:mt-[1em] duration-[0.5s] border-[white]' type="password" name="password" id="passwordSignUp" />
                      </div>
                      <div className='flex flex-col mb-[2em]'>
                        <label htmlFor="password" className='font-[poppins] text-[1.2em] font-bold text-[white] text1'>Confirm Password</label>
                        <input className='outline-none text-white bg-transparent border-b-2 focus:mt-[1em] duration-[0.5s] border-[white]' type="password" name="password" id="passwordSignUpConfirm" />
                      </div>
                      <button onClick={handleSignIn} className='bg-white py-[0.7em] px-[-5em] rounded-[1em] shadow-md hover:shadow-purple-600 hover:scale-105 duration-[0.5s] shadow-purple-800 mb-[1em] text-[1em] capitalize font-[poppins] font-bold text-[#c04269] text5'>Create an acoount</button>
                      </form>
                  </div>
              </div>
            </>
  )
}

export default Loginpage