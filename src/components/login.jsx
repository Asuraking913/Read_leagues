import React from 'react'
import myImage from "./../assets/image1.svg"

function Login() {
  return (
    <div>
        <div className='flex gap-[2em] mt-[.5em]'>
            <p><a href="" className='p-[.7em] boxSha bg-blue-300 font-[poppins] text-[1.2rem] w-full px-[1.5em] duration-[.5s] font-bold text-[#6666bc] text3 rounded-[1.5em]'>Sign Up</a></p>
            <p><a href="" className='p-[.7em] boxSha bg-blue-300 font-[poppins] text-[1.2rem] w-full px-[1.5em] duration-[.5s] font-bold text-[#6666bc] text3 rounded-[1.5em]'>Login</a></p>
            <img src={myImage} alt="" />
        </div>
    </div>
  )
}

export default Login