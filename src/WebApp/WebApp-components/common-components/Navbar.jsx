import React from 'react'
import ccLogo from '../../WebApp-images/chatcircle-logo.svg'
import searchIcon from '../../WebApp-images/search-icon.svg'

const Navbar = () => {
  return (
    <nav className='app-navbar text-[1.4rem] font-semibold py-6 px-12  flex  items-center justify-between'>
        <div className="nav-logo self-start flex">
            <img src={ccLogo} alt="" />
            <div className="ml-[28%] rounded-[30px] bg-black py-1 pl-[20px]  flex  gap-4">
                <input placeholder='Type here...' type="text" className=' pl-2 -mt-1 bg-transparent w-full  xl:w-auto outline-none placeholder:text-[#595959] text-[#c9c9c9] placeholder:tracking-[4px] placeholder:font-semibold placeholder:text-[1.1rem] text-[1.1rem]' />
                <button type='submit' className='py-1 pr-8 pl-4  flex items-center gap-1 bg-yellow text-black rounded-[20px] mr-1 text-[1rem]' >Search <img src={searchIcon} className='w-7' alt="" /> </button>
            </div>
        </div>
        <ul className="flex gap-[3.56rem] text-[1rem] text-[#D7D7D7] font-normal ">
            <li className=" nav-home active">
                Home
            </li>
            <li className="nav-about">
                Profile
            </li>
            <li className="nav-contact">
                Settings
            </li>
            <li className="nav-More">
                Logout
            </li>
        </ul>

    </nav>
  )
}

export default Navbar