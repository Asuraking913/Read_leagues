import React from 'react'
// import BodyHead from '../Landingpage/bodyHead'
import Header from '../Landingpage/header'
import myImage from '../../assets/img5.png'

function Profile() {
  return (
    <div>
        <Header />
        <section className='h-screen w-full'>
            <div className='h-[40%] bg-black relative flex'>
              <div className='bg-white shadow-md shadow-black z-[20] h-[200px] w-[200px] absolute left-[43%] rounded-[50%] top-[9.5em] flex flex-col justify-center items-center'><img className='w-[auto] h-[85%] absolute z-[-20]' src={myImage} alt="" /></div>
            </div>
              <div className='pt-[8em] gap-[1em] flex justify-center flex-col items-center'>
                <h2 className='text-3xl font-[poppins] text-[#c04269] font-extrabold text6'>Jane Doe</h2>
                <p className='text-2xl capitalize font-[roboto] font-semibold'>Content Creator, Novel entusiast, web designer</p>
                <div className='flex gap-[1em]'>
                  <a href="" className='border-2 rounded-[1.5em] p-[0.5em] px-[1em] font-[lit] text-2xl border-black'>Edit Profile</a>
                  <p className='flex justify-center items-center flex-col font-[roboto] font-semibold'>1000 <span className='block'>Following</span></p>
                  <p className='flex justify-center items-center flex-col font-[roboto] font-semibold'>500 <span className='block'>followers</span></p>
                </div>
              </div>
        </section>
    </div>
  )
}

export default Profile