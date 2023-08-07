import React from 'react'
import profile1 from '../../WebApp-images/profiles/profile5.png'
import profile2 from '../../WebApp-images/profiles/profile7.png'
import profile3 from '../../WebApp-images/profiles/profile2.png'
import Post from './Post'
import { useLoaderData } from 'react-router-dom'

const Feed = () => {
    
    const {rooms}=useLoaderData()

    const postDetails=[
    {
        profile:profile1,

    },
    {
        profile:profile2,
    },
    {
        profile:profile3,
        // username:'Arion Roben',
        // timeSince:'1 hr 5 minutes',
        // roomName:'Time travel to the past',
        // roomDescription:'Lets join together and exchange our knowledge and doubts on topics and lets get to know each other',
        // membersNo:9,
        // topic:'time'
    }
  ]
  let posts=rooms.map((item)=>(<Post 
        // profile={postDetails[(Number(item.id)-1)]}
        key={item.id} 
        id={item.id}
        username={item.host.username}
        timeSince={item.timesince_field}
        roomName={item.name}
        roomDescription={item.description}
        membersNo={item.participants.length}
        topic={item.topic.name}
    />))
  return (
    <div className=' flex flex-col gap-[10px]'>
        {posts}
    </div>
  )
}

export default Feed

export const roomsLoader= async()=>{
    const res=await fetch('http://localhost:8000/api/rooms/')
    return res.json()

}