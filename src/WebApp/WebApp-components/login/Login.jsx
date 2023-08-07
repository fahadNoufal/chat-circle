import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import backIcon from '../../WebApp-images/arrow_back_icon.svg'
import float1 from '../../../website/website-images/create-room-floating-1.png'
import float2 from '../../../website/website-images/create-room-floating-2.png'
import float3 from '../../../website/website-images/create-room-floating-3.png'
import float4 from '../../../website/website-images/create-room-floating-4.png'


const Login = () => {

  const [loginData,setLoginData] =useState({username:'',password:''})
  const navigate=useNavigate()

  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(loginData)
    const response=await fetch('http://localhost:8000/api/login/',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData)
    })
    const data =await response.json()
    if (data==='active'){
      console.log('Aldready logged in ');
      navigate('/app')
    }
    else if (data.username){
      console.log('Logged in successfully');
      console.log(data);
      navigate('/app')
    }else {
      console.log('Username or password does not exist')
      setLoginData({username:'',password:''})
      navigate('/app/login')
    }
  }

  const handleInput=(e)=>{
    const {name,value} = e.target
    setLoginData((prev)=>({...prev,[name]:value}))

  }

  return (
    <div className=' create-room -mt-[70px] h-[100svh] w-full flex justify-center items-center web-app'>
        <div className=" create-room-container max-w-[830px] relative rounded-[25px] mt-20  w-full  ">
            <div className=" bg-gradient-to-r rounded-t-[25px] to-[rgb(0,0,0)] py-4 px-10 text-[1.7rem] text-[#818181] flex justify-between items-center tracking-[2px] font-semibold from-[rgba(27,27,27,0.87)] ">
              <span>Login</span>
              <button className='pl-4 -mb-2 pb-2 '><img src={backIcon} className='w-4 mr-2' alt="" /></button>
            </div>
            <div className=" h-full py-8 px-10   ">
              <form id='create-room-form' onSubmit={handleSubmit}   className='flex flex-col gap-[33px]'>
                <div>
                  <label htmlFor="username">
                    Username
                  </label>
                  <input type="text" spellCheck='false' name='username' value={loginData.username} onChange={handleInput} className=' w-full rounded mt-2 ' id='username' placeholder='Enter username...' />
                </div>
                <div>
                  <label htmlFor="password">
                    Password
                  </label>
                  <input type="text" spellCheck='false' name='password' value={loginData.password}  onChange={handleInput} className=' w-full rounded mt-2 ' id='password' placeholder='Enter password...' />
                </div>

                <div>
                  <label htmlFor="confirm-password">
                    Confirm Password
                  </label>
                  <input type="text" spellCheck='false' className=' w-full rounded mt-2 ' name='confirm_password' id='confirm-password' placeholder='Enter password...' />
                </div>
                <button type="submit" className='bg-[#090711] tracking-[3px] font-semibold text-xl py-2 text-[#b7b4b4] px-6 rounded-md'>Login</button>

              </form>
            </div>
            <img src={float1} alt="" className="absolute top-8 -right-[100px]" />
            <img src={float2} alt="" className='absolute -top-[120px] left-[170px] scale-80 ' />
            <img src={float3} alt="" className='absolute top-16 -left-[165px]' />
            <img src={float4} alt="" className='absolute  -bottom-[110px] shadow-2xl  right-60 ' />
        </div>
    </div>
  )
}

export default Login