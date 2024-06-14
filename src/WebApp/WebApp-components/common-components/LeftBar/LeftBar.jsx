import React, { useEffect, useState } from "react";

import ProfilePic from "../ProfilePic";
import moreIcon from '../../../WebApp-images/expand_more.svg'
import { useLoaderData, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTopic } from "../../../../features/topics/topicsSlice";
import { pushNotification } from "../../../../features/pushNotification/pushNotificationSlice";


const LeftBar = () => {

  const {topics,discover_users,room_count}=useLoaderData()
  const dispatch=useDispatch()
  const profilePics=useSelector(store=>(store.profile.profiles))
  const navigate=useNavigate()


  const TopicItem = ({ topic, count }) => {
    return (
      <li className="cursor-pointer" onClick={()=>{dispatch(setTopic(topic));dispatch(pushNotification(`Showing rooms with topic ${topic}`));}}>
        <div  className="py-[12px] shadow-lg -ml-2 pl-[25px] pr-[14px]  flex rounded-[14px] items-center bg-gradient-to-r to-[rgba(0,0,0,0.5)] from-[rgba(0,0,0,0.15)] justify-between">
          <span className="text-[1rem] text-[#9d9d9d] overflow-hidden whitespace-nowrap mr-3 tracking-[3px]">
            {topic}
          </span>
          <div className="bg-[#222222] hidden min-w-[45px] lg:flex text-[1rem] text-[#189cb9] justify-center items-center rounded-[5px] px-[12px] h-[35px]">
            {count}
          </div>
        </div>
      </li>
    );
  };

  const Profile=({profile,name,id})=>{
    return(
      <Link to={`/chat-circle/user/${id}/`} className="discover-profile-item flex-col self-start justify-between items-center p-[14px] rounded-[10px] flex bg-[#040404] text-[0.8rem]" onClick={()=>{}} >
        <ProfilePic profile={profile} width='60' />
        <span className="discover-profile-name text-center max-w-[100px] font-bold mt-[8px]">
          {name} 
        </span>
      </Link>
    )
  }

  const profiles=discover_users?discover_users.map((item,index)=>(<Profile profile={profilePics[item.avatar]} id={item.id} name={item.username} key={index} />)):''

  const topic_list = topics?topics.map((item) => (
    <TopicItem key={item.name} topic={item.name} count={item.room_count} />
  )):''

  return (
    <div className="left-bar w-full py-[2.9rem] hidden gap-[0.5rem] bg-[#1E1E1E] md:flex flex-col items-center max-w-[230px] lg:max-w-[370px] select-none">
      <div className="left-topic-section text-left w-[70%] ">
        <h1 className=" opacity-75 text-[1.9rem] -ml-1 font-medium tracking-[3px]">
            Topics
        </h1>
        <h3 className=" text-[12px] font-semibold mt-[10px] mb-[18px] text-[#6a6a6a] tracking-[2px]">
          Browse topics
        </h3>
       
        <ul className=" flex flex-col lg:min-w-[190px] gap-[14px]">
          <li onClick={()=>{dispatch(setTopic(''));navigate('/chat-circle')}}>
            <div  className="py-[12px] shadow-lg -ml-2 pl-[25px] pr-[14px] flex rounded-[14px] cursor-pointer items-center bg-gradient-to-r to-[rgba(117,117,117,0.5)] from-[rgba(89,89,89,0.15)] justify-between">
              <span className="text-[1rem] font-semibold text-[#189cb9] tracking-[3px]">
                All
              </span>
              <div className="bg-[#222222] min-w-[45px] flex text-[1rem] text-[#189cb9] justify-center items-center rounded-[5px] px-[12px] h-[35px]">
                {room_count}
              </div>
            </div>
          </li>
          {topic_list}
        </ul>
        <div className="text-[1.1rem] opacity-60 text-blueRoom font-medium flex gap-4  pl-5 my-6 items-center cursor-pointer " onClick={()=>{dispatch(setTopic(''))}} > More <span>{ <img className=" w-[18px]" src={moreIcon} alt="" /> }</span>  </div>
      </div>  
      {discover_users&&(
        <div className="discover-people ">
          <h1 className="opacity-75 text-[1.5rem] mb-[22px] -ml-1 font-medium tracking-[3px]">
            Discover <span className="hidden lg:inline">people</span>
          </h1>
          <div className="grid-profiles flex  items-center">
            <div className=" grid gap-[12px] lg:grid-cols-2 ">
              {profiles}

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftBar;

