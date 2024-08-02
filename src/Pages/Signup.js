import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ReactFlagsSelect from 'react-flags-select';
import logo from '../Asstes/background.webp'
import { BsPersonFill } from "react-icons/bs";

const Signup = () => {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [country, setCountry] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [gender, setGender] = useState('')
    const [loader,setLoader] = useState(false)
    const navigate = useNavigate()

    const SignupURlAPI='http://127.0.0.1:8000/api/register'
    async function Signup(){
     setLoader(true)
         try{
           const response=await axios.post(SignupURlAPI,{
                email: email,
                password: password,
                name: name,
                phone_number: phone,
                gender: gender,
                country: country
           })
            localStorage.setItem('token',response.data.authorisation.token)    
            console.log(response.data.authorisation.token)
            navigate('/login')
            setLoader(false)
        }catch(err){
            console.log(err)
            setLoader(false)
        }
    }

    console.log('pp', country)

  return (
    <div className='w-screen h-screen bg-center bg-no-repeat bg-auto  flex justify-center items-center relative ' style={{ backgroundImage: `url(${logo})` }}>
        <div className='w-[100%] h-[100%] bg-[#3a2e21] bg-opacity-70 absolute'></div>
        <div className='w-[80%] h-[80%] bg-[#a5815d] bg-opacity-80 z-50 rounded-2xl text-white flex justify-center items-center flex-col gap-3' >
            <div className='border-2 border-white w-24 h-24 rounded-full flex justify-center items-center'>
                <BsPersonFill size={60}/>
            </div>
            <h2 className='text-2xl font-semibold'>Signup</h2>
            <div className='w-[95%] h-[50%] grid grid-cols-3 grid-rows-2 items-center '>
            <div className='w-[95%] flex flex-col mb-5 gap-1'>
                        <label>Name</label>
                        <input type='text' className='outline-none p-2 h-10.5 bg-transparent border-2 border-white rounded-md text-white' onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className='w-[95%] flex flex-col mb-5 gap-1'>
                        <label>Email</label>
                        <input type='email' className='outline-none p-2 h-10.5 bg-transparent border-2 border-white rounded-md text-white' onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className='w-[95%] flex flex-col mb-5 gap-1'>
                        <label>Password</label>
                        <input type='password' className='outline-none p-2 h-10.5 bg-transparent border-2 border-white rounded-md text-white' onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div className='w-[95%] flex flex-col mb-5 gap-1'>
                        <label>Phone Number</label>
                        <input type='text' className='outline-none p-2 h-10.5 bg-transparent border-2 border-white rounded-md text-white' onChange={(e)=>setPhone(e.target.value)}/>
                    </div>
                    <div className='w-[95%] flex flex-col mb-5 gap-1'>
                        <label>Gender</label>
                        {/* <input type='email' className='outline-none p-2 h-10.5 bg-transparent border-2 border-white rounded-md'/> */}
                        <select className='outline-none p-2 h-10.5.5 bg-transparent border-2 border-white rounded-md text-white' onChange={(e)=>setGender(e.target.value)}>
                            <option></option>
                            <option value='male' className='text-black'>Male</option>
                            <option value='female' className='text-black'>Female</option>
                        </select>
                    </div>
                    <div className='w-[95%] flex flex-col mb-5 gap-1'>
                        <label>Country</label>
                        {/* <input type='email' className='outline-none p-2 h-10.5 bg-transparent border-2 border-white rounded-md'/> */}
                        <ReactFlagsSelect className='rounded-md text-black bg-white' selected={country} onSelect={setCountry}/>
                    </div>
            </div>
            <button className='w-[50%] bg-[#212121] h-12 rounded-md text-lg hover:bg-[#392f24]' onClick={()=>Signup()}>
            {loader ? <div className='w-[100%] h-[100%] flex justify-center items-center'> <div
  class=" h-6 w-6 animate-spin rounded-full border border-solid border-current border-r-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]"
  role="status">
  <span
    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span>
</div>
</div> : 'register'}
            </button>
        </div>

    </div>
  )
}

export default Signup