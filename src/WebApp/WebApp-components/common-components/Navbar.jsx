import ccLogo from "../../WebApp-images/chatcircle-logo.svg";
import searchIcon from "../../WebApp-images/search-icon.svg";
import { Link, NavLink, Outlet } from "react-router-dom";
import {useLocation} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { setTopic } from "../../../features/topics/topicsSlice";
import { removeUser } from "../../../features/userDetails/userSlice";
import { pushNotification } from "../../../features/pushNotification/pushNotificationSlice";


const Navbar = () => {

  const user= useSelector(state=>state.user.user)
  const {pathname}=useLocation()
  const dispatch=useDispatch()

  useEffect(()=>{
      window.scrollTo({top:0})
  },[pathname])
  
  return (
    <div className="relative ">
      <nav className="app-navbar text-[1.4rem] font-medium py-6 px-12  flex  items-center justify-between">
        <div className="nav-logo self-start flex">
          <Link to='/app'  >
            <img src={ccLogo} className=" h-11 max-w-[200px]  cursor-pointer" onClick={()=>{dispatch(setTopic(''))}} alt="" />
          </Link>
          {/* <form method="GET" target="/app" onSubmit={(e)=>{e.preventDefault();dispatch(setTopic(searchTopic));setSearchTopic('')}} className="ml-[28%] translate-x-[-100px] rounded-[30px] bg-black py-1 pl-[20px]  flex  gap-4">
            <input
              autoComplete="off"
              name="q"
              onChange={(e)=>{setSearchTopic(e.target.value)}}
              value={searchTopic}
              spellCheck='false'
              placeholder="Type here..."
              type="text"
              className=" pl-2  bg-transparent w-full  xl:w-auto outline-none placeholder:text-[#595959] text-[#c9c9c9] placeholder:tracking-[4px] placeholder:font-semibold placeholder:text-[1.1rem] text-[1.1rem]"
            />
            <button
              type="submit"
              className="py-1 pr-8 pl-4  flex items-center gap-1 bg-yellow text-black rounded-[20px] mr-1 text-[1rem] "
            >
              Search <img src={searchIcon}  className="w-7 -mt-1" alt="" />{" "}
            </button>
          </form> */}
          
        </div>
        <ul className="flex gap-[3.56rem] text-[1rem] text-[#D7D7D7] font-normal ">
          <NavLink to='/app'>
            Home
          </NavLink>
          {
          user?<NavLink to={`user/${jwt_decode(user.access).user_id}`}>
            Profile
          </NavLink>:''
          }
          <NavLink to=''>
            Settings
          </NavLink>
          {
      
      user?<NavLink onClick={()=>{dispatch(removeUser());dispatch(pushNotification('Logged out Successfully'))}}>
            logout
          </NavLink>:<NavLink to='login'>
            login
          </NavLink>
          }
        </ul>
      </nav>
      <div className="mt-20">
        <Outlet/>
      </div>
    </div>
  );
};

export default Navbar;
