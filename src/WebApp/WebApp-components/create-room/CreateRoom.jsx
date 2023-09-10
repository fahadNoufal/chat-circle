import React, { useEffect, useState } from 'react'
import backIcon from '../../WebApp-images/arrow_back_icon.svg'
import float1 from '../../../website/website-images/create-room-floating-1.png'
import float2 from '../../../website/website-images/create-room-floating-2.png'
import float3 from '../../../website/website-images/create-room-floating-3.png'
import float4 from '../../../website/website-images/create-room-floating-4.png'
import {useNavigate, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { pushNotification } from '../../../features/pushNotification/pushNotificationSlice'
import { removeUser } from '../../../features/userDetails/userSlice'


const CreateRoom = ({edit=false}) => {

  const navigate=useNavigate()
  const dispatch = useDispatch();
  const { id } = useParams();
  const {user,currentUser}= useSelector(state=>state.user)
  
  const [form_data,set_form_data]= useState({name:'',topic:'',description:''})

  const handleSubmit=async(e)=>{
    e.preventDefault()
    const response=await fetch('http://localhost:8000/api/create-room/',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' +String(user.access)
      },
      body: JSON.stringify(form_data)
    })
    if (response.statusText === "Unauthorized") {
      dispatch(removeUser());
      navigate("/app/login");
      dispatch(pushNotification("Access token Expired . Please log in again"));
    }
    const data= await response.json()
    console.log(data)
    if(data){
      navigate('/app')
    }
  }

  const handleEdit=async(e)=>{
    e.preventDefault()
    const response=await fetch(`http://localhost:8000/api/update-room/${id}/`,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' +String(user.access)
      },
      body: JSON.stringify({...form_data,topic:{name:form_data.topic}})
    })
    if (response.statusText === "Unauthorized") {
      dispatch(removeUser());
      navigate("/app/login");
      dispatch(pushNotification("Access token Expired . Please log in again"));
    }
    const data= await response.json()
    console.log(data)
    if(data){

      dispatch(pushNotification('Successfully updated'))
      navigate(`/app/room/${id}/`)
    }
    else{
      dispatch(pushNotification('Error occured during updation!'))
      navigate(`/app/room/${id}/`)
    }
  }

  useEffect(()=>{
    if (edit){
      if(!user){
        dispatch(pushNotification('Login before updating!'))
        return navigate('/app/login/')
      }
      const fetchRoom = async()=>{
        const response=await fetch(`http://localhost:8000/api/update-room/${id}/`,{
          method: 'GET',
          headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' +String(user.access)
          },
        })
        if (response.status!==200) {
          dispatch(pushNotification('Something went wrong. Please try again later'))
          return navigate(`/app/room/${id}/`)
        }
        
        const data= await response.json()

        if(currentUser.id!==data.host.id){
          dispatch(pushNotification('Only host of this room can edit!'))
          return navigate('/app')
        }
  
        if(data){
          set_form_data({name:data.name,topic:data.topic.name,description:data.description})
        }
      }
      fetchRoom()
    }
  },[])


  const handleInput=(e)=>{
    const {name,value}=e.target
    set_form_data((prev)=>({...prev,[name]:value}))
  }

  return (
    <div className=' create-room -mt-[70px] h-[100svh] w-full flex overflow-hidden justify-center items-center web-app'>
        <div className=" create-room-container max-w-[830px] mx-10 md:mx-0   relative rounded-[25px] mt-20  w-full  ">
            <div className=" bg-gradient-to-r rounded-t-[25px] to-[rgb(0,0,0)] py-4 px-10 text-[1.2rem] md:text-[1.6rem] text-[#818181] flex justify-between items-center tracking-[2px] font-semibold from-[rgba(27,27,27,0.87)] ">
              <span>{edit?'Update Room':'Create Room'}</span>
              <button className='pl-4 -mb-2 pb-2 z-40 scale-75 md:scale-100 ' onClick={()=>{navigate(-1)}} ><img src={backIcon} className='w-4 mr-2' alt="" /></button>
            </div>
            <div className=" h-full py-8 md:px-10 px-5   ">
              <form id='create-room-form' onSubmit={(e)=>{edit?handleEdit(e):handleSubmit(e)}} className='flex flex-col gap-[15px] md:gap-[33px]'>
                <div>
                  <label htmlFor="room-name">
                    Name
                  </label>
                  <input type="text" autoComplete='off' spellCheck='false' className=' w-full rounded mt-2 ' name='name' onChange={handleInput} value={form_data.name} id='room-name' placeholder='Enter Room Name...' />
                </div>
                <div>
                  <label htmlFor="room-topic">
                    Topic
                  </label>
                  <input type="text" spellCheck='false' className=' w-full rounded mt-2' name='topic' onChange={handleInput} value={form_data.topic} id='room-topic' placeholder='Enter Topic...' />
                </div>

                <div>
                  <label htmlFor="room-description">
                    Description
                  </label>
                  <textarea type="text" autoComplete='off' spellCheck='false' className=' w-full rounded mt-2 ' name='description' onChange={handleInput} value={form_data.description} id='room-description' placeholder='Enter Description...' />
                </div>
                <button type="submit" className='bg-[#100d20] tracking-[3px] font-semibold md:text-xl py-2 text-[#b7b4b4] px-6 rounded-md'>Submit</button>
              </form>
            </div>
            <img src={float1} alt="" className="absolute scale-75 md:scale-100 top-[50%] md:top-8 -right-[100px]" />
            <img src={float2} alt="" className='absolute scale-75 md:scale-100 -top-[120px] left-[20%] scale-80 ' />
            <img src={float3} alt="" className='absolute scale-75 md:scale-100 top-[4%] md:top-16 -left-[165px]' />
            <img src={float4} alt="" className='absolute scale-75 md:scale-100  -bottom-[110px] shadow-2xl right-[30%]' />
        </div>
    </div>
  )
}

export default CreateRoom