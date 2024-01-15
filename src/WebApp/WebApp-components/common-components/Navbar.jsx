import ccLogo from "../../WebApp-images/chatcircle-logo.svg";
import { Link, NavLink, Outlet } from "react-router-dom";
import {useLocation} from 'react-router-dom'
import { gsap } from "gsap/gsap-core";
import React, { useEffect, useState,useRef} from 'react'
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { setTopic } from "../../../features/topics/topicsSlice";
import { removeUser } from "../../../features/userDetails/userSlice";
import { pushNotification } from "../../../features/pushNotification/pushNotificationSlice";
import { setUser } from '../../../features/userDetails/userSlice';


const url="http://fahadnoufal.pythonanywhere.com"

const Navbar = () => {


  const user= useSelector(state=>state.user.user)
  const {pathname}=useLocation()
  const dispatch=useDispatch()
  let [loading,setLoading]=useState(true)


  useEffect(()=>{
      window.scrollTo({top:0})
  },[pathname])
  
  const [showMenu,setShowMenu] = useState(false);


  // Rotating tokens
  const update_token= async()=>{
    console.log("Updating token...");
    const response=await fetch(`${url}/api/token/refresh/`,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'refresh':user.refresh})
    })
    if (response.status!==200){
      console.log("something went wrong")
      setUser(null)
    }
    const data =await response.json()
    // console.log(jwt_decode(data.access))
    dispatch(setUser(data))
  }
  
  //calling update token in every 10 minutes
  useEffect(()=>{
    let interval=setInterval(() => {
      if (user){
        console.log("--1--");

        update_token()
      }
    },1000*60*4);
    return ()=>clearInterval(interval)
  },[user,loading])

  const MenuBar=()=>{return(
      <div className="menu-container px-10 py-10 items-center">

        <ul className='flex flex-col gap-8 text-center' onClick={()=>{setShowMenu(false)}} >
          <NavLink className='menu-item' to='/app'>
              Home
          </NavLink>
          <NavLink className='menu-item' to='/app/topics'>Topics</NavLink>
          <NavLink className='menu-item' to= '/app/activities'>Activities</NavLink>
          {
          user?<NavLink className='menu-item' to={`user/${jwt_decode(user.access).user_id}`}>
            Profile
          </NavLink>:''
          }
          <NavLink className='menu-item' to={'/app/create-room'}>Create Room</NavLink>
          {
            user?<NavLink onClick={()=>{dispatch(removeUser());dispatch(pushNotification('Logged out Successfully'))}}>
              logout
            </NavLink>:<NavLink className='menu-item' to='login'>
              login
            </NavLink>
          }
        </ul>
        <div className=" bg-[#794afd] flex justify-center mt-8 menu-close-icon" onClick={()=>{setShowMenu(false)}}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="white">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
          </svg>
        </div>
      </div>
  )}

  let tl=useRef();
  useEffect(()=>{
    let ctx=gsap.context(()=>{
      tl.current=gsap.timeline({paused:true})
      tl.current.to('.menu-screen',{y:0,duration:0.3,ease:'power3.easeOut'})
      tl.current.to('.menu-screen-white',{y:'-100%',ease:'power3.easeIn'})
    })

    return ()=>{ctx.revert()}
  },[])

  useEffect(()=>{
    showMenu?tl.current.play():tl.current.reverse();
  },[showMenu])


  // const handleMenuChange=()=>{
  //   setShowMenu(prev=>(!prev));
  // }
  return (
    <div className="relative" >
      <nav className="app-navbar text-[1.4rem] font-medium py-5  md:py-6 px-12  flex  items-center justify-between">
        <div className="nav-logo self-start flex">
          <Link to='/app'  >
            <img src={ccLogo} className=" h-11 max-w-[140px]  lg:max-w-[200px]  cursor-pointer" onClick={()=>{dispatch(setTopic(''))}} alt="" />
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
          <input type="checkbox" value={showMenu} id="checkbox" onClick={()=>{setShowMenu((true))}} />
            <label htmlFor="checkbox" className="toggle">
                <div className="bars" id="bar1"></div>
                <div className="bars" id="bar2"></div>
                <div className="bars" id="bar3"></div>
            </label>
          {/* <img src={menu} alt="" /> */}
        </div>
      </nav>
      <div className="mt-20">
        <Outlet/>
      </div>
      <div className="menu-screen fixed translate-y-[100%] top-0 bottom-0 left-0 right-0 flex justify-center items-center  bg-[#000] z-50">
          <MenuBar/>

          <div className=" menu-screen-white bg-white translate-y-[0%] absolute top-0 bottom-0 right-0 left-0"></div>
      </div>
    </div>
  );
};

export default Navbar;
