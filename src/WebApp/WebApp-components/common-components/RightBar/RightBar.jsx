import React from 'react'
import profile5 from '../../../WebApp-images/profiles/profile5.png'
import profile6 from '../../../WebApp-images/profiles/profile6.png'
import profile7 from '../../../WebApp-images/profiles/profile7.png'
import {Link} from 'react-router-dom'

import ProfilePic from '../ProfilePic'

const RightBar = () => {

  let activityDetails=[
    {profile:profile5,name:'Don benny',timeSince:'3 minutes',roomName:'Python for everybody',message:'Hello everyone!!.. '},
    {profile:profile6,name:'Alex Homoxi',timeSince:'1 hour 32 minutes',roomName:'JavaScript and frontend development',message:'There are some problems! '},
    {profile:profile7,name:'Bradley box',timeSince:'3 hour 3 minutes',roomName:'Python for everybody',message:'Lets start thec code.. '},
  ]

  const Activity=({profile,name,timeSince,roomName,message})=>{
    return(
        <div className="activity-item w-[280px] p-[19px] rounded-[14px] flex flex-col gap-[12px] bg-gradient-to-br from-[rgba(0,0,0,0.57)] to-[rgba(69,68,68,0.22)] ">
            <Link className="act-profile flex gap-2 items-center" to='/app/profile'>
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
            <Link to='/app/room' className="description">
                <p className='text-[14px] tracking-wider'>
                    messaged in the room '<span className=" font-semibold text-[#00c2ff]">{roomName}</span>'
                </p>
            </Link>
            <Link to='app/room' className="act-message w-full rounded-[8px] bg-[#3e3e3e] py-2 px-4">
                <span className=' text-[0.83rem] tracking-widest'>{message}</span>
            </Link>
        </div>
    )
  }

  const activities=activityDetails.map((item,index)=>(
    <Activity 
        key={index}
        {...item}
    />
  ))

  return (
    <div className=' right-bar w-full min-h-[100vh] pt-[2.9rem] gap-[4.4rem] bg-[#1E1E1E] flex flex-col items-center max-w-[370px]'>
        <div className="activities-container w-[80%] flex flex-col">
            <h1 className=" opacity-75 text-[1.9rem] mb-[30px] ml-2 font-medium tracking-[3px]">
                Activities
            </h1>
            <div className="activities-list flex flex-col gap-1">
                {activities}
            </div>
        </div>
    </div>
  )
}

export default RightBar