import React, { useState } from 'react'
import backIcon from '../../WebApp-images/arrow_back_icon.svg'
import float1 from '../../../website/website-images/create-room-floating-1.png'
import float2 from '../../../website/website-images/create-room-floating-2.png'
import float3 from '../../../website/website-images/create-room-floating-3.png'
import float4 from '../../../website/website-images/create-room-floating-4.png'
import {useNavigate} from 'react-router-dom'

const CreateRoom = () => {

  const navigate=useNavigate()

  const handleSubmit=async(e)=>{
    e.preventDefault()
    const response=await fetch('http://localhost:8000/api/create-room/',{
      method: 'POST',
      headers:{
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(form_data)
    })
    const data= await response.json()
    console.log(data)
    if(data){
      navigate('/app')
    }
    
  }

  const [form_data,set_form_data]= useState({name:'',topic:'',description:''})

  const handleInput=(e)=>{
    const {name,value}=e.target
    set_form_data((prev)=>({...prev,[name]:value}))
  }

  return (
    <div className=' create-room -mt-[70px] h-[100svh] w-full flex justify-center items-center web-app'>
        <div className=" create-room-container max-w-[830px] relative rounded-[25px] mt-20  w-full  ">
            <div className=" bg-gradient-to-r rounded-t-[25px] to-[rgb(0,0,0)] py-4 px-10 text-[1.7rem] text-[#818181] flex justify-between items-center tracking-[2px] font-semibold from-[rgba(27,27,27,0.87)] ">
              <span>Update Room</span>
              <button className='pl-4 -mb-2 pb-2 '><img src={backIcon} className='w-4 mr-2' alt="" /></button>
            </div>
            <div className=" h-full py-8 px-10   ">
              <form id='create-room-form' onSubmit={handleSubmit} className='flex flex-col gap-[33px]'>
                <div>
                  <label htmlFor="room-name">
                    Name
                  </label>
                  <input type="text" spellCheck='false' className=' w-full rounded mt-2 ' name='name' onChange={handleInput} id='room-name' placeholder='Enter Room Name...' />
                </div>
                <div>
                  <label htmlFor="room-topic">
                    Topic
                  </label>
                  <input type="text" spellCheck='false' className=' w-full rounded mt-2' name='topic' onChange={handleInput} id='room-topic' placeholder='Enter Topic...' />
                </div>

                <div>
                  <label htmlFor="room-description">
                    Description
                  </label>
                  <textarea type="text" spellCheck='false' className=' w-full rounded mt-2 ' name='description' onChange={handleInput} id='room-description' placeholder='Enter Description...' />
                </div>
                <button type="submit" className='bg-[#100d20] tracking-[3px] font-semibold text-xl py-2 text-[#b7b4b4] px-6 rounded-md'>Submit</button>
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

export default CreateRoom