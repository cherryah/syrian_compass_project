import React, { useState, useEffect } from 'react'
import axios from 'axios';
import NavBar from '../Component/NavBar'
import { BsPersonFill } from "react-icons/bs";
import ReactFlagsSelect from 'react-flags-select';


const Profile = () => {

    const [edit, setEdit] = useState(false)
    const [profile, setProfile] = useState([])

    const ProfileURlAPI='http://127.0.0.1:8000/api/profile'
    async function Profile(){
      console.log('ssss')
         try{
          const response = await axios.get(ProfileURlAPI, {
            headers: {
              "Authorization": `Bearer ${localStorage.getItem('token')}`,
              "Content-Type": "multipart/form-data",
              "Access-Control-Allow-Origin": "*"
            }
          });
            console.log(response.data.data)
            setProfile(response.data.data)

        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        Profile()
      }, []);

  return (
    <div
  className='w-screen h-screen bg-center bg-no-repeat bg-cover overflow-hidden  bg-[#d1b798]'
//   style={{ backgroundImage: `url(${logoImage})` }}
>
        <div className='w-[100%] h-16 mb-10'>
            <NavBar data={true}/>  
        </div>
        <div className='w-[100%] h-[80%] flex justify-center items-center flex-col text-white'>
          <div className='w-[75%] h-[100%] bg-[#212121b7] rounded-2xl flex justify-center items-center flex-col gap-5'>
            <div className='w-24 h-24 rounded-full border-2 border-white flex justify-center items-center'>
                <BsPersonFill color='#fff' size={60}/>
            </div>
            <div className='w-[90%] h-14 flex justify-end items-center'>
                {edit ? 
                <div className='w-[30%] h-12 flex justify-evenly items-center'>
                    <button className='w-[48%] h-[100%] bg-[#d1b798] text-lg rounded-xl'>Save</button>
                    <button className='w-[48%] h-[100%] border-2 border-[#d1b798] text-[#d1b798] text-lg rounded-xl' onClick={()=>setEdit(false)}>Cancel</button>

                </div> 
                :  
                <button className='w-24 h-12 bg-[#d1b798] rounded-xl text-lg' onClick={()=>setEdit(true)}>Edit</button>}
            </div>
        
          <div className='w-[95%] h-[50%] grid grid-cols-3 grid-rows-2 items-center '>
{/* {profile ? profile.map((item, key) => ( <> */}
            <div className='w-[95%] flex flex-col mb-5 gap-1'>
                        <label>Name</label>
                        <input type='text' value={profile.name} className='outline-none p-2 h-10.5 bg-transparent border-2 border-white rounded-md text-white' disabled/>
                    </div>
                    <div className='w-[95%] flex flex-col mb-5 gap-1'>
                        <label>Email</label>
                        <input type='email' value={profile.email} className='outline-none p-2 h-10.5 bg-transparent border-2 border-white rounded-md text-white' disabled/>
                    </div>
                    {/* <div className='w-[95%] flex flex-col mb-5 gap-1'>
                        <label>Password</label>
                        <input type='password' value={} className='outline-none p-2 h-10.5 bg-transparent border-2 border-white rounded-md text-white'/>
                    </div> */}
                    <div className='w-[95%] flex flex-col mb-5 gap-1'>
                        <label>Phone Number</label>
                        <input type='text' value={profile.phone_number} className='outline-none p-2 h-10.5 bg-transparent border-2 border-white rounded-md text-white' disabled/>
                    </div>
                    <div className='w-[95%] flex flex-col mb-5 gap-1'>
                        <label>Gender</label>
                        {/* <input type='email' className='outline-none p-2 h-10.5 bg-transparent border-2 border-white rounded-md'/> */}
                        <select value={profile.gender} className='outline-none p-2 h-10.5.5 bg-transparent border-2 border-white rounded-md text-white' disabled>
                            <option></option>
                            <option value='male' className='text-black'>Male</option>
                            <option value='female' className='text-black'>Female</option>
                        </select>
                    </div>
                    <div className='w-[95%] flex flex-col mb-5 gap-1'>
                        <label>Country</label>
                        {/* <input type='email' className='outline-none p-2 h-10.5 bg-transparent border-2 border-white rounded-md'/> */}
                        <ReactFlagsSelect selected={profile.country}  disabled className='rounded-md text-black bg-white'/>
                    </div>
                    {/* </>)) : ''} */}
            </div>
            </div>
        </div> 
    </div>
  )
}

export default Profile