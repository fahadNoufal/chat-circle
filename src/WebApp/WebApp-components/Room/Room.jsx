import React from "react";
import ProfilePic from "../common-components/ProfilePic";
import profile1 from "../../WebApp-images/profiles/profile7.png";
import profile2 from "../../WebApp-images/profiles/profile8.png";
import profile3 from "../../WebApp-images/profiles/profile3.png";
import profile4 from "../../WebApp-images/profiles/profile5.png";
import sendIcon from '../../WebApp-images/sendIcon.svg'
import {Link, useLoaderData} from 'react-router-dom'


const Room = () => {

  const {roomItem,room_messages}=useLoaderData()

  let messageList=[
    {profile:profile1,username:'Amore Tore', timeSince:'3 minutes',message:'Hello guysss...!!!'},
    {profile:profile2,username:'Jacjy Ambr', timeSince:'5 minutes',message:'This is the best post i see today!'},
    {profile:profile3,username:'Peter Shi', timeSince:'2 hours',message:'Lets lean together...!!!'},
    {profile:profile4,username:'Chang Skte', timeSince:'2 hours 9 minutes',message:'ok guyss'},
    {profile:profile3,username:'Amore Tore', timeSince:'2 days 9 hours',message:'Hello everyone.'},

  ]

  const membersList =[
    {profile:profile1,username:'Amore Tore'},
    {profile:profile2,username:'Peter Dern'},
    {profile:profile3,username:'Jackson Varky'},
    {profile:profile4,username:'Karole Deni'},
    {profile:profile2,username:'Amberhead Anotoi'},
    {profile:profile3,username:'Issac Josh'},
    {profile:profile1,username:'Ambrosi Mathew'},

  ]

  const RoomMember=({profile,username})=>{
    return(
        <Link to='/app/profile' className="member-card flex tracking-widest font-semibold bg-[#696969] cursor-pointer p-[9px] rounded-[10px] bg-opacity-25 text-blueRoom gap-[12px] pl-3 items-center">
            <ProfilePic profile={profile} width='47' />
            <span className="pr-6 overflow-hidden">{username}</span>
        </Link>
    )
  }

  const MessageBox = ({ profile, username, timeSince, message }) => {
    return (
      <div className="message-box relative px-[30px] py-[11px] bg-[#0c0c0c] rounded-[6px] ">
        <div className="flex justify-between items-center">
          <Link to='/app/profile' className="msg-profile flex items-center gap-2">
            <ProfilePic profile={profile} width="30" />
            <span className=" text-[0.8rem] text-blueRoom tracking-[2px] font-medium ">
              {username}
            </span>
          </Link>
          <span className="msg-timesince text-[#9c9c9c] text-[0.7rem] tracking-wider">
            {timeSince} ago
          </span>
        </div>
        <div className="message-content mt-2 ml-1 mb-1 text-[0.8rem] tracking-[2px] font-medium">
          {message}
        </div>
      </div>
    );
  };

  let messages=room_messages.map((item) => (<MessageBox key={item.id} profile='' username={item.user_id.username} timeSince={item.timesince_field}  message={item.body} />))
  let members= roomItem.participants.map((member) => (<RoomMember key={member.id} {...member} />));

  return (
    <div className="flex justify-center h-[99svh] -mt-[75px] overflow-hidden pt-[40px] web-app">
      <div className="flex  justify-between max-w-[1400px] px-8 gap-24 mb-4 mt-[65px]">
        <div className="room-container flex flex-grow flex-col rounded-[20px] max-w-[866px] h-full relative overflow-hidden">
          <div className=" tracking-[5px] text-[1.7rem] font-bold   bg-[#696969] py-[22px] pl-[56px]">
            Room
          </div>
          <div className=" px-[50px] gap-[10px] pt-[40px] pb-[20px] overflow-hidden flex flex-col h-full flex-grow bg-[#1e1e1e]">
            <div className="flex mb-1 justify-between items-center">
              <h1 className=" text-[1.8rem] font-semibold tracking-[3px] text-blueRoom  ">  
                {roomItem.name}
              </h1>
              <span className=" text-[#848484] tracking-[2px] ">
                {roomItem.timesince_field} ago
              </span>
            </div>
            <div className="created-by italic flex items-center gap-4 mt">
              <span className="text-[1rem] tracking-[2px] text-[#c7c7c7] font-medium">
                Created by
              </span>
              <Link to={`/app/user/${roomItem.host.id}`} className="py-1 pl-2 pr-3 bg-[#696969] font-medium italic tracking-[1px] rounded-[10px] gap-2 text-blueRoom text-[0.9rem] bg-opacity-25 flex items-center ">
                <ProfilePic profile={profile1} width="38" />
                {roomItem.host.username}
              </Link>
            </div>
            <div className="room-dec-cont">
              <span className=" text-[#979797] italic font-bold text-[1.45rem] opacity-70 ">
                Description
              </span>
              <p className=" text-[1.05rem] mt-[10px] leading-6 italic tracking-widest ">
                {roomItem.description}
              </p>
            </div>
            <div className="messages-container mt-2 w-full pt-[38px] rounded-[16px] overflow-scroll bg-[#040404] ">
                <div className=" messages-list px-[30px] flex flex-col gap-2 flex-grow mb-12 ">
                    {messages}
                </div>
            </div>
            <div className=" mx-[50px] pl-4 bg-[#797979] absolute bottom-[20px] left-0 flex right-0 rounded-[16px] ">
                <input type="text" className=" bg-transparent  py-3  w-full outline-none placeholder:opacity-80 placeholder:text-white placeholder:tracking-[3px]" placeholder="Write your message here..." />
                <button className=" bg-blueRoom text-lg text-gray-200 font-semibold rounded-[16px] flex gap-1 items-center rounded-l-none px-4  "  type="submit"> 
                  <span>Send</span> <img src={sendIcon} className="w-6 mr-2" alt="" />
                </button>
            </div>
            

          </div>
        </div>
        <div className=" w-[400px] rounded-[20px] overflow-hidden flex h-[70%] flex-col ">
            <div className=" tracking-[5px] text-[1.7rem] font-semibold bg-[#696969] py-[22px]  text-center w-full">
                Members
            </div>
            <div className="members-container overflow-scroll rounded-b-[20px] flex flex-col p-[22px] gap-[10px] bg-[#1e1e1e] w-full ">
                {members}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Room;

export const roomLoader=async({params})=>{
  const {id}=params
  const res= await fetch(`http://localhost:8000/api/room/${id}/`)
  return res.json()
}