import React from 'react'

function Foot() {
  return (
    <div className='h-[auto] w-[100%] bg-[#c04269] '>
        <div>
            <ul className='flex footer sm:gap-[10em] justify-between sm:justify-center py-[2em] px-[2em]'>
                <li><a href="" className='sm:text-3xl icons hover:text-green-100 duration-[0.8s] hover:underline textSize text-xl text-white text5 font-[poppins] font-bold'>About Us</a></li>
                <li><a href="" className='sm:text-3xl icons hover:text-green-100 duration-[0.8s] hover:underline textSize text-xl text-white text5 font-[poppins] font-bold'>Feed Back</a></li>
                <li><a href="" className='sm:text-3xl icons hover:text-green-100 duration-[0.8s] hover:underline textSize text-xl text-white text5 font-[poppins] font-bold' >Community</a></li>
            </ul>
            <ul className='flex gap-[2em] p-[1em] justify-center'>
              <li className='bg-white hover:scale-90 capitalize duration-[0.5s] border-2 border-[#fdba74] boxSha1 px-1 py-1 rounded-[50%] flex items-center justify-center'><a href=""><i className='text-[2.5rem] text-blue-500 fa-brands fa-facebook '></i></a></li>
              <li className='bg-white hover:scale-90 capitalize duration-[0.5s] border-2 border-[#fdba74] boxSha1 px-2 py-1 rounded-[50%] flex items-center justify-center'><a href=""><i className='text-[2.5rem] text-black fa-brands fa-instagram'></i></a></li>
              <li className='bg-white hover:scale-90 capitalize duration-[0.5s] border-2 border-[#fdba74] boxSha1 px-2 py-1 rounded-[50%] flex items-center justify-center'><a href=""><i className='text-[2.5rem] fa-brands fa-square-x-twitter'></i></a></li>
              <li className='bg-white hover:scale-90 capitalize duration-[0.5s] border-2 border-[#fdba74] boxSha1 px-1 py-1 rounded-[50%] flex items-center justify-center'><a href=""><i className='text-[2.5rem] text-red-600 fa-brands fa-youtube'></i></a></li>
              <li className='bg-white hover:scale-90 capitalize duration-[0.5s] border-2 border-[#fdba74] boxSha1 px-2 py-1 text-green-500 rounded-[50%] flex items-center justify-center'><a href=""><i className='text-[2.5rem] fa-brands fa-whatsapp'></i></a></li>
            </ul>
            <hr />
        </div>
        <h3 className='text-center text-[1em] p-1 font-[OFL] text-[#fdba74] text1'><i className='fa-solid fa-copyright text-white mr-2'></i>RLeague Global Inc</h3>
    </div>
  )
}

export default Foot