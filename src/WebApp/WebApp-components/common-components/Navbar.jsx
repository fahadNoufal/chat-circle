import ccLogo from "../../WebApp-images/chatcircle-logo.svg";
import searchIcon from "../../WebApp-images/search-icon.svg";
import { Link, NavLink, Outlet } from "react-router-dom";
import {useLocation} from 'react-router-dom'
import React, { useEffect } from 'react'

const Navbar = () => {

  const {pathname}=useLocation()

  useEffect(()=>{
      window.scrollTo({top:0})
  },[pathname])

  

  return (
    <div className="relative ">
      <nav className="app-navbar text-[1.4rem] font-medium py-6 px-12  flex  items-center justify-between">
        <div className="nav-logo self-start flex">
          <Link to='/app'  >
            <img src={ccLogo} className=" h-11 " alt="" />
          </Link>
          <form method="GET" target="/app" className="ml-[28%] translate-x-[-100px] rounded-[30px] bg-black py-1 pl-[20px]  flex  gap-4">
            <input
              name="q"
              spellCheck='false'
              placeholder="Type here..."
              type="text"
              className=" pl-2  bg-transparent w-full  xl:w-auto outline-none placeholder:text-[#595959] text-[#c9c9c9] placeholder:tracking-[4px] placeholder:font-semibold placeholder:text-[1.1rem] text-[1.1rem]"
            />
            <button
              type="submit"
              className="py-1 pr-8 pl-4  flex items-center gap-1 bg-yellow text-black rounded-[20px] mr-1 text-[1rem] "
            >
              Search <img src={searchIcon} className="w-7 -mt-1" alt="" />{" "}
            </button>
          </form>
        </div>
        <ul className="flex gap-[3.56rem] text-[1rem] text-[#D7D7D7] font-normal ">
          <NavLink to='/app'>
            Home
          </NavLink>
          <NavLink to='profile'>
            Profile
          </NavLink>
          <NavLink to=''>
            Settings
          </NavLink>
          <NavLink to='login'>
            Logout
          </NavLink>
        </ul>
      </nav>
      <div className="mt-20">
        <Outlet/>
      </div>
    </div>
  );
};

export default Navbar;
