import React from 'react'
import logo from '../../website-images/chat-circle-text-logo.svg'
import mouse from '../../website-images/mouseIcon.svg'


const Navbar = () => {
  return (
    <nav className=' navbar w-full text-white z-20 absolute top-0'>
        <div className='py-6 flex font-medium  fixed top-0 left-0 right-0'>
            <div className=" flex flex-1 items-center pl-[4rem]"> 
                <img src={logo} className='h-[1.1rem] mb-1' alt="" />
            </div>
            <div className="nav-links flex flex-[2] pr-[4rem] justify-between items-center">
                <ul className=' flex gap-[45%] pl-[100px]  text-[1.15rem] font-medium ' >
                    <li>
                        <div className='active'>
                            Home
                        </div>
                    </li>
                    <li>
                        <div>
                            Features
                        </div>
                    </li>
                    <li>
                        <div>
                            Explore
                        </div>
                    </li>
                    <li>
                        <div>
                            Contact
                        </div>
                    </li>
                </ul>
                <span>
                    <img src={mouse}alt="" className='-mb-3' />
                </span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar