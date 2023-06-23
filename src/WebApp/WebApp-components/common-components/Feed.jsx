import React from 'react'
import profile1 from '../../WebApp-images/profiles/profile5.png'
import profile2 from '../../WebApp-images/profiles/profile7.png'
import profile3 from '../../WebApp-images/profiles/profile2.png'
import Post from './Post'

const Feed = () => {

  const postDetails=[
    {
        profile:profile1,
        username:'Peter Aurthor',
        timeSince:'23 minutes',
        roomName:'Python for everybody',
        roomDescription:'Hey developers, lets join together and exchange our knowledge and doubts on topics and lets get to know each other',
        membersNo:14,
        topic:'python'
    },
    {
        profile:profile2,
        username:'John Matich',
        timeSince:'44 minutes',
        roomName:'JavaScript and frontend development',
        roomDescription:'Hey developers, lets join together and exchange our knowledge and doubts on topics and lets get to know each other.Hey developers, lets join together and exchange our knowledge and doubts on topics and lets get to know each other',
        membersNo:27,
        topic:'JavaScipt'
    },
    {
        profile:profile3,
        username:'Arion Roben',
        timeSince:'1 hr 5 minutes',
        roomName:'Time travel to the past',
        roomDescription:'Lets join together and exchange our knowledge and doubts on topics and lets get to know each other',
        membersNo:9,
        topic:'time'
    },
    {
        profile:profile1,
        username:'Peter Aurthor',
        timeSince:'23 minutes',
        roomName:'Python for Begginers',
        roomDescription:'Hey developers, lets join together and exchange our knowledge and doubts on topics and lets get to know each other',
        membersNo:14,
        topic:'python'
    },
    {
        profile:profile2,
        username:'John Matich',
        timeSince:'44 minutes',
        roomName:'Chat gpt and its features',
        roomDescription:'Hey developers, lets join together and exchange our knowledge and doubts on topics and lets get to know each other.Hey developers, lets join together and exchange our knowledge and doubts on topics and lets get to know each other',
        membersNo:27,
        topic:'JavaScipt'
    },
    {
        profile:profile3,
        username:'Arion Roben',
        timeSince:'1 hr 5 minutes',
        roomName:'Time travel ',
        roomDescription:'Lets join together and exchange our knowledge and doubts on topics and lets get to know each other',
        membersNo:9,
        topic:'time'
    },
  ]

  let posts=postDetails.map((item)=>(<Post key={item.roomName} {...item}/>))
  return (
    <div className=' flex flex-col gap-[10px]'>
        {posts}
    </div>
  )
}

export default Feed