import React from 'react'
import {Link, useLoaderData} from 'react-router-dom'

import ProfilePic from '../ProfilePic'
import { useSelector } from 'react-redux'

const RightBar = () => {

  const {messages}=useLoaderData()
  const profilePics=useSelector(store=>store.profile.profiles)

  const Activity=({profile,name,timeSince,roomName,message,user_id,roomId})=>{
    return(
        <div className="activity-item max-w-[280px] p-[19px]  rounded-[14px] flex flex-col gap-[12px] bg-gradient-to-br from-[rgba(0,0,0,0.57)] to-[rgba(69,68,68,0.22)] ">
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
  const NoActivities=()=>{
    return(
      <div className=" text-white text-2xl opacity-40 mt-4">
        No Activities
      </div>
    )
  }

  return (
    <div className=' right-bar w-full min-h-[100vh] hidden pt-[2.9rem] gap-[4.4rem] bg-[#1E1E1E] xl:flex flex-col  items-center max-w-[370px]'>
        <div className="activities-container px-10 flex flex-col items-center ">
            <h1 className=" opacity-75 self-start text-[1.9rem] mb-[30px] ml-2 font-medium tracking-[3px]">
                Activities
            </h1>
            <div className="activities-list flex flex-col gap-1 items-center ">
                {activities_list.length===0?<NoActivities/>:activities_list}
            </div>
        </div>
    </div>
  )
}

export default RightBar