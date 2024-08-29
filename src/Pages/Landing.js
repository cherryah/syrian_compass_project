import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../Component/NavBar'
import logoImage from '../Asstes/Landing.png' 


const Landing = () => {

  const token =  localStorage.getItem('token')

  return (     
<div
  className='w-screen h-screen bg-center bg-no-repeat bg-cover overflow-hidden'
  style={{ backgroundImage: `url(${logoImage})` }}
>
        <div className='w-[100%] h-16'>
            <NavBar/> 
        </div>
        <div className='w-[100%] h-[65%] flex justify-center gap-10 flex-col text-white'>
          <h2 className='pl-24 text-7xl font-bold w-[40%]'>It’s a big world out there!,Go explore.</h2>
          <p className='pl-24 w-[40%]'>Discover new attractions and experiences to match your interests and travel style.</p>
          {token ? <div className='pl-24 w-[40%] flex justify-start gap-10'>
            <Link to='/governorate' className='w-64 bg-[#ffffff8a] text-black font-bold py-1 rounded-2xl hover:bg-[#ffffff9e] flex justify-center items-center'>Start your journey</Link>
            {/* <Link to='/login' className='w-40 bg-[#ffffff8a] text-black font-bold py-1 rounded-2xl hover:bg-[#ffffff9e] flex justify-center items-center'>Login</Link> */}
                      </div>
                       :
                         <div className='pl-24 w-[40%] flex justify-start gap-10'>
            <Link to='/signup' className='w-40 bg-[#ffffff8a] text-black font-bold py-1 rounded-2xl hover:bg-[#ffffff9e] flex justify-center items-center'>Register now</Link>
            <Link to='/login' className='w-40 bg-[#ffffff8a] text-black font-bold py-1 rounded-2xl hover:bg-[#ffffff9e] flex justify-center items-center'>Login</Link>
                      </div>}
        </div>
        <div className='w-[93%] h-[25.8%] flex justify-end gap-4 relative'>
          <div className='bg-[#ffffff48] w-56 h-[100%] rounded-t-2xl border border-b-0 border-white shadow-lg shadow-white flex justify-center items-center absolute top-5 right-4 hover:top-0 hover:transition ease-out duration-700'>
            <div className='w-[80%] h-[75%] text-white flex gap-2 flex-col'>
              <h2 className='text-lg font-semibold'>Eazy Bookings</h2>
              <hr className='border-2 rounded-full'/>
              <p className='mt-5 text-sm'>Best in class ticket booking system.</p>
            </div>
          </div>
          <div className='bg-[#ffffff48] w-56 h-[120%] rounded-t-2xl border border-b-0 border-white shadow-lg shadow-white flex justify-center items-center absolute top-0 left-2/3 hover:-top-5 hover:transition ease-out duration-700'>
            <div className='w-[80%] h-[75%] text-white flex gap-2 flex-col'>
              <h2 className='text-lg font-semibold'>Quality Guidance</h2>
              <hr className='border-2 rounded-full'/>
              <p className='mt-5 text-sm'>Our tour guide is full of joyness.</p>
            </div>
          </div>
          <div className='bg-[#ffffff48] w-56 h-[140%] rounded-t-2xl border border-b-0 border-white shadow-lg shadow-white flex justify-center items-center absolute left-1/2 -top-5 hover:-top-10 hover:transition ease-out duration-700'>
            <div className='w-[80%] h-[75%] text-white flex gap-2 flex-col'>
              <h2 className='text-lg font-semibold'>Top Choices</h2>
              <hr className='border-2 rounded-full'/>
              <p className='mt-5 text-sm'>Total 50+ destinations you can explore.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Landing 