import React from 'react'

function Search({header}) {

    if (header) {
        return (
            <div className='sm:hidden'>
                <form action="" className=' flex justify-center sm:justify-normal'>
                    <input type="text" placeholder='Search for a topic....' className='p-3 rounded-l-full w-[70%] text-[poppins] outline-none text-[1.2em] placeHolder placeholder-[#fdba74]' />
                    <button className='bg-white rounded-r-full flex sm:hidden justify-center items-center text-white'><i className='fa-solid text1 w-full text-[1.6rem] h-full rounded-[50%] bg-[#fdba74] duration-[0.5s] hover:bg-orange-300 fa-search p-3 px-3 border-2'></i></button>
                </form>
            </div>
          )
    }
 else {
  return (
    <div className='hidden sm:block w-full m-[-3em]'>
        <form action="" className='mt-[2em] flex justify-center sm:justify-center'>
            <input type="text" placeholder='Search for a topic....'  className='p-4 boxSha2 text-[poppins] rounded-l-full w-[60%] outline-none text-[1.2em] placeholder-[#fdba74] placeHolder' />
            <button className='bg-white rounded-r-full flex justify-center items-center text-white'><i className='fa-solid text1 w-full text-[1.6rem] h-full rounded-[50%] bg-[#fdba74] hover: duration-[0.5s] fa-search p-4 px-4 border-2'></i></button>
        </form>
    </div>
  )}
}

export default Search