import React from 'react'
import {Link, useLoaderData} from 'react-router-dom'

import ProfilePic from './ProfilePic'
import { useSelector } from 'react-redux'

const url="https://fahadnoufal.pythonanywhere.com"

const Activities = () => {


    const {messages}=useLoaderData()
    const profilePics=useSelector(store=>store.profile.profiles)  

    const Activity=({profile,name,timeSince,roomName,message,user_id,roomId})=>{
    return(
        <div className="activity-item md:max-w-[280px] w-full max-w-[400px] p-[19px]  rounded-[14px] flex flex-col gap-[12px] bg-gradient-to-br from-[rgba(0,0,0,0.57)] to-[rgba(69,68,68,0.22)] ">
            <Link className="act-profile flex gap-2 items-center" to={`/chat-circle/app/user/${user_id}`}>
                <ProfilePic profile={profile} width="50"/>
                <div className=" flex flex-col -gap-1">
                    <h3 className=' text-lg font-medium tracking-widest'>
                        {name}
                    </h3>
                    <span className="opacity-70 text-[0.87rem] ">
                        {timeSince} ago
                    </span>
                </div>
            </Link>
            <Link to={`room/${roomId}`} className="description">
                <p className='text-[14px] tracking-wider'>
                    messaged in the room '<span className=" font-semibold text-[#00c2ff]">{roomName}</span>'
                </p>
            </Link>
            <Link to={`room/${roomId}`} className="act-message w-full rounded-[8px] bg-[#3e3e3e] py-2 px-4">
                <span className=' text-[0.83rem] tracking-widest'>{message}</span>
            </Link>
        </div>
      )
    }

    const activities_list=messages.map((item)=>(
    <Activity
        key={item.id}
        user_id={item.user_id.id}
        name={item.user_id.username}
        profile={profilePics[item.user_id.avatar]}
        timeSince={item.timesince_field}
        roomName={item.room.name}
        roomId={item.room.id}
        message={item.body}
    />
    ))

    

  return (
    <div className=' w-full h-[92svh] pt-[2.9rem] gap-[4.4rem]  bg-[#1E1E1E] flex-col  items-center '>
        <div className="activities-page-container h-full overflow-scroll  px-10 flex flex-col items-center ">
            <h1 className=" opacity-75 self-start  text-[1.9rem] mb-[30px] ml-2 font-medium tracking-[3px]">
                Activities
            </h1>
            <div className="activities-list flex flex-col gap-4 pb-10 items-center ">
                {activities_list}
            </div>
        </div>
    </div>
  )
}

export default Activities

export const activitiesLoader= async()=>{
    
    const res=await fetch(`${url}/api/activity/`)
    return res.json()
}