import React, { useEffect, useRef, useState } from "react";
import Feed from "../common-components/Feed";
import searchIcon from '../../WebApp-images/search-icon2.svg'
import ProfilePic from "../common-components/ProfilePic";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import add from "../../WebApp-images/add.svg";
import { useDispatch, useSelector } from "react-redux";
import { setTopic } from "../../../features/topics/topicsSlice";
import { pushNotification } from "../../../features/pushNotification/pushNotificationSlice";
import { gsap } from "gsap/gsap-core";

const HomeFeed = () => {
    
  const { rooms, room_count } = useLoaderData();
  const user=useSelector(store=>store.user.currentUser)
  const profilePics=useSelector(store=>store.profile.profiles)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const [searchTopic,setSearchTopic]=useState()

  const handleCreateRoom=(e)=>{
    if(!user){
      dispatch(pushNotification("Please Login to create your room!"))
      return navigate('/chat-circle/login/')
    }
    return navigate('/chat-circle/create-room/')
  }

  let searchTl=useRef()
  
  useEffect(()=>{
    let ctx=gsap.context(()=>{
      searchTl.current= gsap.timeline({paused:true})
      searchTl.current.to('.topic-search-icon',{x:0,duration:1,delay:0.7,opacity:1,ease:'power3.easeIn'})
    })
    return ()=>{ctx.revert()}
  })

  useEffect(()=>{
    searchTopic&&searchTl.current.play();
    searchTopic===''&&searchTl.current.reverse()
    // gsap.to('.welcome-container',{
    //   opacity:0,
    //   duration:0.5,
    //   ease:'power3.easeInOut',
    //   delay:1
    // })
    
    // gsap.to('.redirect',{
    //   yPercent:-100,
    //   duration:0.5,
    //   opacity:0,
    //   delay:0.5,
    //   ease:'power3.easeOut',
    // })
  },[searchTopic])
  
  const LoggedInUserWedget = ({ username,profile}) => {
    return (
      <div className="w-full">
       
      <div className="flex md:gap-[27px] gap-[10px] md:flex-row flex-col mb-5 select-none">
        <div className="flex   justify-between py-4 gap-8 flex-1 bg-black px-5 md:px-10 items-center rounded-[20px]  ">
          <div className="font-semibold flex flex-col -mt-1 ">
            <div className="  md:text-[1.38rem] flex gap-2 ">
              <span className="text-[#ffc953]">{room_count}</span> rooms
              available
            </div>
            <div className=" flex justify-between gap-4  items-center">
              <span className="text-[0.7rem] tracking-[2px] md:tracking-[3px] font-light">
                Create your own room  
              </span>
            </div>
          </div>
          <Link to="/chat-circle/create-room">
            <button className="bg-[#189cb9] flex py-3  rounded-[10px] text-5xl px-3 ">
              <div className="flex justify-center min-w-[20px] md:min-w-[40px] items-center">
                <img src={add} className="scale-150" alt="" />
              </div>
            </button>
          </Link>
        </div>
        <div className="flex-1 hidden bg-black rounded-[20px] py-[20px] md:flex flex-col justify-center items-center ">
          <div className="w-[310px] flex flex-col gap-[10px]">
            <div className="current-user-profile flex ml-6 gap-4 items-center">
              <ProfilePic profile={profile} width="50" />
              <span className="text-[1.5rem] font-medium  tracking-[2px]">
                {username}
              </span>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  };


  return (
    <div className=" py-10  flex w-full max-w-[940px] items-center flex-col h-[90vh] px-6 md:px-10 xl:px-4 ">
       <form 
          method="GET" 
          target="" 
          onSubmit={(e)=>{e.preventDefault();dispatch(setTopic(searchTopic));setSearchTopic('')}} 
          className=" search-room-bar mb-3 relative overflow-x-clip rounded-[30px] items-center py-[12px] pl-8  flex "
        >
          <input
            autoComplete="off"
            name="q"
            onChange={(e)=>{setSearchTopic(e.target.value)}}
            value={searchTopic}
            spellCheck='false'
            placeholder="Search Rooms, Topics, etc..."
            type="text"
            className=" pl-2 hidden md:block bg-transparent w-full outline-none placeholder:text-[#595959] text-[#c9c9c9] placeholder:tracking-[1.5px] placeholder:font-medium placeholder:text-[1rem] text-[1rem]"
          />
          <input
            autoComplete="off"
            name="q"
            onChange={(e)=>{setSearchTopic(e.target.value)}}
            value={searchTopic}
            spellCheck='false'
            placeholder="Search Rooms..."
            type="text"
            className=" pl-2 md:hidden bg-transparent w-full outline-none placeholder:text-[#595959] text-[#c9c9c9] placeholder:tracking-[1.5px] placeholder:font-medium placeholder:text-[1rem] text-[1rem]"
          />
          <button type="submit" className="absolute topic-search-icon px-3 py-[0.2rem] rounded-md bg-blueRoom opacity-0 right-2 translate-x-[150%]">
              <img src={searchIcon} alt="" />
          </button>
      </form>
      {!user&&(
          <div className=" flex pb-4 pt-1 w-full px-1 items-center justify-between">
            <div className=" text-[0.9rem] lg:text-[1.5rem] flex gap-2">
              <span className="text-[#ffc953] font-bold">{room_count}</span> rooms
              available
            </div>
            <button onClick={handleCreateRoom} className=" px-3 py-1 bg-blueRoom text-[0.8rem] md:text-[1rem] rounded-lg font-semibold" >Create Room</button>
          </div>
      )}
      {user&&<LoggedInUserWedget profile={profilePics[user.avatar]} username={user.username} />}
      <Feed rooms={rooms} />
    </div>
  );
};
export default HomeFeed;
