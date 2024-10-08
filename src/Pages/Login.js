import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logoImage from '../Asstes/1.JPG'
import { BsPersonFill } from "react-icons/bs";

const Login = () => {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [loader,setLoader] = useState(false)
    const navigate = useNavigate()

    const LoginURlAPI='http://127.0.0.1:8000/api/login'
    async function LogIn(){
     setLoader(true)
         try{
           const response=await axios.post(LoginURlAPI,{
                email: email,
                password: password
           })
            localStorage.setItem('token',response.data.authorisation.token)    
            console.log(response.data.authorisation.token)
            navigate('/')
            setLoader(false)
        }catch(err){
            console.log(err)
            setLoader(false)
        }
    }


    return (
        <div className='w-screen h-screen bg-[#212121] flex justify-center items-center text-white'> 
            <div className='bg-[#a5815d] w-[65%] h-[95%] rounded-s-2xl flex justify-center items-center flex-col gap-10'>
                <div className='border-2 border-white w-24 h-24 rounded-full flex justify-center items-center'>
                <BsPersonFill color='#fff' size={60}/>
                </div>
                <div className='w-[80%]'> 
                    <h2 className='text-3xl font-bold'> 
                        Login
                    </h2>
                    <p className='text-sm font-thin'>
                        Enter your login details 
                    </p>
                </div>
                <div className='w-[80%]'> 
                    <div className='w-[95%] flex flex-col mb-5 gap-1'>
                        <label>Email</label>
                        <input type='email' className='outline-none p-2 h-10 bg-transparent border-2 border-white rounded-lg' onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className='w-[95%] flex flex-col gap-1'>
                        <label>password</label>
                        <input type='password' className='outline-none p-2 h-10 bg-transparent border-2 border-white rounded-lg' onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                </div>
                <div className='w-[50%]'>
                    <button className='w-[95%] bg-[#212121] h-12 rounded-lg text-lg hover:bg-[#392f24]' onClick={()=>LogIn()}>
                    {loader ? <div className='w-[100%] h-[100%] flex justify-center items-center'> <div
  class=" h-6 w-6 animate-spin rounded-full border border-solid border-current border-r-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]"
  role="status">
  <span
    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span>
</div>
</div> : 'Login'}
                    </button>
                    <p className='text-center font-thin text-lg'>
                        Don't have an account ? <a href='/signup' className='font-semibold underline hover:text-yellow-50'> Signup </a>
                    </p>
                </div>
            </div>
            <div className='flex items-center justify-center w-[32%] h-[95%] rounded-e-2xl bg-cover' style={{ backgroundImage: `url(${logoImage})` }}>
            </div>
        </div>
    );
}

export default Login;
