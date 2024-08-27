import React from 'react'
import NavBar from '../Component/NavBar'
import Card from '../Component/Card'

const Search = () => {
  return (
    <div className='w-screen h-screen bg-center overflow-x-hidden bg-no-repeat bg-cover bg-[#d1b798]'>
        <div className='w-[100%] h-16'>
            <NavBar/>
        </div>
        <div className='w-[100%] h-fit text-white flex justify-center items-center flex-col mt-10'>
                    <div className='w-[95%] h-24 flex justify-center items-center gap-4'>
                    <input type="text" className='text-black'/>
                    </div>

        </div>
    </div>  

  )
}

export default Search