import React from 'react'
import axios from 'axios';
import { BsSearch , BsPersonFill, BsArrowBarRight } from "react-icons/bs";
import { Link } from 'react-router-dom';

const NavBar = ({data, data1}) => {

  const token = localStorage.getItem('token')
  console.log(token)

  const LogoutURlAPI='http://127.0.0.1:8000/api/logout'
    async function Logout(){
      console.log('ssss')
      localStorage.clear('token')
      window.location.reload(); 
         try{
          const response = await axios.post(LogoutURlAPI, {
            headers: {
              "Authorization": `Bearer ${localStorage.getItem('token')}`,
              "Content-Type": "multipart/form-data",
              "Access-Control-Allow-Origin": "*"
            }
          });
            console.log(response)
        }catch(err){
            console.log(err)
        }
    }

  return (
    <div className='w-[100%] h-16 text-[#ffffff] flex justify-evenly items-center bg-[#8c694898] shadow-md shadow-[#8c6948cf] z-50'>
        <div className='w-[20%]'>
            <h1 className='font-thin text-3xl font-[Monospace]'>SyrianCompass</h1>
        </div>
        <div className='w-[50%] h-[100%] flex justify-evenly items-center text-lg font-semibold'>
            {data || data1 ? <Link to='/governorate' className='hover:text-[#826950]'>Governorate</Link> : ''}
            {data1 ? <Link to='/destination' className='hover:text-[#826950]'>Destination</Link> : ''}
            {/* <Link to='/hotels' className='hover:text-[#826950]'>Hotels</Link>
            <Link to='/events' className='hover:text-[#826950]'>Events</Link> */}
        </div>
        <div className='w-[25%] flex justify-evenly items-center'>
            <input type='text' placeholder='search' className={`outline-none ${token ? 'w-[40%]' : 'w-[75%]'}  px-2 py-1.5 rounded-2xl text-white bg-[#ffffff58] placeholder:text-[#ffffff]`}/>
            <button  className='w-10 h-10 bg-[#ffffff58] rounded-full flex justify-center items-center text-[#ffffff]'>
              <BsSearch/> 
            </button>
            {token ? 
            <>
            <Link to='/profile' className='w-10 h-10 bg-[#ffffff58] rounded-full flex justify-center items-center text-[#ffffff]'>
            <BsPersonFill size={23}/>
          </Link>
          <button className='w-10 h-10 bg-[#ffffff58] rounded-full flex justify-center items-center text-[#ffffff]' onClick={()=>Logout()}>
          <BsArrowBarRight size={23}/>
        </button>
        </>
            :''}
        </div>
    </div>
  )
}

export default NavBar