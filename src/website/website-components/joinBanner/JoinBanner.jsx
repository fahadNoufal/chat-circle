import React from 'react'
import {Link} from 'react-router-dom'

const JoinBanner = () => {
  return (
    <div id='join' className='join-banner relative  '>
      <div className=' my-[15rem] relative flex flex-col justify-center'>
        <div className="text-[4.8rem] mb-[5rem] font-medium text-center">
          <h2>
            Join your circle <span className="gradient-text">Today itself!</span>
          </h2>
        </div>
        <div className=" join-heading text-[25rem] join-div h-[280px]  bg-black w-full overflow-x-hidden">
          <Link to='app'>
            <div className="join-span-container gap-36 flex justify-center items-center">
              <span>JOIN</span>
              <span>JOIN</span>
              <span>JOIN</span>
            </div>
          </Link>
        </div>
          <Link to='app' className="join-btn px-12 inline self-center font-medium text-black tracking-tighter rounded-[7px] my-[57px] mt-[75px] text-[4rem] leading-[70px] bg-[#F1b739] ">
            JOIN
          </Link>
        </div>
    </div>
  )
}

export default JoinBanner