import ccLogo from "../../WebApp-images/chatcircle-logo.svg";
import searchIcon from "../../WebApp-images/search-icon.svg";
import { Link, NavLink, Outlet } from "react-router-dom";
import {useLocation} from 'react-router-dom'
import { gsap } from "gsap/gsap-core";
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
  
  const [showMenu,setShowMenu] = useState(false);

  const MenuBar=()=>{return(
      <div className="menu-container translate-x-[100%] fixed right-0 top-[85px] z-30 px-10 bottom-0 py-10 bg-black">
        <ul className='flex flex-col gap-8 text-center'>
          <NavLink to='/app'>
              Home
          </NavLink>
          <NavLink to='/app/topics'>Topics</NavLink>
          <NavLink to= '/app/activities'>Activities</NavLink>
          {
          user?<NavLink to={`user/${jwt_decode(user.access).user_id}`}>
            Profile
          </NavLink>:''
          }
          <NavLink to={'/app/create-room'}>Create Room</NavLink>
          {
            user?<NavLink onClick={()=>{dispatch(removeUser());dispatch(pushNotification('Logged out Successfully'))}}>
              logout
            </NavLink>:<NavLink to='login'>
              login
            </NavLink>
          }
        </ul>
      </div>
  )}

  useEffect(()=>{
    let ctx=gsap.context(()=>{

      let xShift = showMenu?'0':'100%';
      gsap.to('.menu-container',{x:xShift,ease:'power3.easeInOut'}); 

    })
    return ()=>ctx.revert();

  },[showMenu])


  const handleMenuChange=()=>{
    setShowMenu(prev=>(!prev));
  }
  

  return (
    <div className="relative">
      <nav className="app-navbar text-[1.4rem] font-medium py-5  md:py-6 px-12  flex  items-center justify-between">
        <div className="nav-logo self-start flex">
          <Link to='/app'  >
            <img src={ccLogo} className=" h-11 max-w-[140px] md:max-w-[200px]  cursor-pointer" onClick={()=>{dispatch(setTopic(''))}} alt="" />
          </Link>
          
        </div>
        <ul className="md:flex hidden gap-[3.56rem] text-[1rem] text-[#D7D7D7] font-normal ">
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
        <div className="md:hidden menu scale-[0.62] select-none -mr-2"  >
          <input type="checkbox" value={showMenu} id="checkbox" onChange={handleMenuChange}/>
            <label htmlFor="checkbox" className="toggle">
                <div className="bars" id="bar1"></div>
                <div className="bars" id="bar2"></div>
                <div className="bars" id="bar3"></div>
            </label>
          {/* <img src={menu} alt="" /> */}
        </div>
      </nav>
      <div className="mt-20">
        <MenuBar/>
        <Outlet/>
      </div>
    </div>
  );
};

export default Navbar;
