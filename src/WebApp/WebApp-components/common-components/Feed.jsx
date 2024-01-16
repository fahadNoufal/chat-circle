import React, { useEffect, useState } from 'react'
import Post from './Post'
import { useLoaderData } from 'react-router-dom'
import { useSelector } from 'react-redux'


const url="https://fahadnoufal.pythonanywhere.com"

const Feed = () => {
    
    const {rooms}=useLoaderData()
    const [roomsList,setRooms]=useState(rooms)
    const currentTopic=useSelector(store=>store.topic.topic)
    const profilePics=useSelector(store=>store.profile.profiles)


    
    useEffect(()=>{
        const fetchData=async()=>{
            const res=await fetch(`${url}/api/rooms?q=${currentTopic}`)
            const data=await res.json()
            setRooms(data.rooms)
        }
        fetchData()
    },[currentTopic])

  let posts=roomsList?roomsList.map((item)=>(<Post 
    key={item.id} 
    id={item.id}
    username={item.host.username}
    timeSince={item.timesince_field}
    roomName={item.name}
    roomDescription={item.description}
    membersNo={item.participants.length}
    hostId={item.host.id}
    topic={item.topic.name}
    profile={profilePics[item.host.avatar]}
/>)):''

  const NoRooms=()=>{
    return(
      <div className=" text-white text-4xl mt-20">
        No Rooms
      </div>
    )
  }

  return (
    <div className=' flex flex-col gap-[10px] w-full items-center pb-8'>
        {/* {!posts} */}
        {/* {posts?posts:<NoRooms/>} */}
        {posts.length===0?<NoRooms/>:posts}
    </div>
  )
}

export default Feed


export const roomsLoader= async()=>{
    
    const res=await fetch(`${url}/api/rooms/`)
    return res.json()
}