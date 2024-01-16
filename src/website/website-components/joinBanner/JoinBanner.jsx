import {gsap} from 'gsap';
import React from 'react'
import { useEffect } from 'react';
import {Link,useNavigate} from 'react-router-dom'


const JoinBanner = () => {

  const navigate=useNavigate();
  const tl=gsap.timeline( {paused:true} )
  
  useEffect(()=>{
    tl.to('.redirect',{
      y:0,
      duration:1,
      ease:'power3.easeIn'
    })
    tl.to('.welcome-screen',{
      y:0,
      duration:1,
      ease:'power3.easeOut'
    })
    tl.to('.welcome-text-1',{
      y:0,
      duration:1,
      ease:'power3.easeInOut'
    })
    tl.to('.welcome-text-2',{
      y:0,
      duration:1,
      ease:'power3.easeInOut',
      onComplete:()=>{
        return navigate('/chat-circle/app')
      }
    })
    tl.to('.welcome-container',{
      opacity:0,
      duration:0.5,
      ease:'power3.easeInOut',
      delay:1
    })
    
    tl.to('.redirect',{
      yPercent:-100,
      duration:0.5,
      opacity:0,
      ease:'power3.easeOut',
    })
  },[])

  const toApp=()=>{
    tl.play()
  }

  return (
    <div id='join' className='join-banner relative sm:py-4 py-28 '>
      <div className=' my-[3rem] lg:my-[15rem] relative flex flex-col justify-center'>
        <div className="lg:text-[4.8rem] text-[2.7rem] lg:mb-[5rem] mb-[2rem] font-bold lg:font-medium text-center">
          <h2>
            Join your circle <span className="gradient-text block ">Today itself!</span>
          </h2>
        </div>
        <div className=" join-heading lg:text-[25rem] text-[6rem]  join-div lg:h-[280px]  bg-black w-full overflow-x-hidden">
          <Link to='app' onClick={toApp}>
            <div className="join-span-container lg:h-[280px] tracking-[-10px] lg:tracking-[-15px] lg:gap-36 gap-14 flex justify-center items-center">
              <span>JOIN</span>
              <span>JOIN</span>
              <span>JOIN</span>
            </div>
          </Link>
        </div>
          <Link to='app' className="join-btn px-12 inline self-center font-medium text-black tracking-tighter rounded-[7px] scale-75 lg:scale-100 mb-[40px] mt-[40px] lg:mb-[57px] lg:mt-[75px] text-[4rem] leading-[70px] bg-[#F1b739] " onClick={toApp}>
            JOIN
          </Link>
        </div>
    </div>
  )
}

export default JoinBanner