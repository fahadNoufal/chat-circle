import React, { useEffect } from 'react'
import chatcircleBuildings from '../../website-images/chatCircle-hero-image.png'
import dropDown from '../../website-images/drop-down.svg'
import topForward1 from '../../website-images/home-top-forward-1.svg'
import topForward2 from '../../website-images/home-top-forward-2.svg'
import topForward3 from '../../website-images/home-top-forward-3.svg'

import topBack from '../../website-images/home-top-back.svg'
import bottomBack1 from '../../website-images/home-bottom-1.svg'
import bottomBack2 from '../../website-images/home-bottom-2.svg'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'



const HomeScreen = () => {
  gsap.registerPlugin(ScrollTrigger)
  useEffect(()=>{
    let tl=gsap.timeline({
      scrollTrigger:{
        trigger:'.home',
        start:'top top',
        end:'bottom 10%',
        pin:true,
        // pinSpacing:false,
        ease:'none',
        scrub:0.5,
        toggleActions:'play reverse play reverse',
      }
    })
    tl.to('.home-wave-1',{ yPercent:-20})
    tl.to('.home-wave-2',{ yPercent:-70},'<')
    tl.to('.home-wave-3',{ yPercent:-50},"<")
    tl.to('.home-wave-4',{ yPercent:-50},"<")
    tl.to('.home-wave-5',{ yPercent:80},"<")
    tl.to('.home-wave-6',{ yPercent:250},"<")

    return () => {
      ScrollTrigger.getAll().forEach((instance) => {
        instance.kill();
      });
    };
  },[])

  return (
    <div id='home' className="home  bg-black pl-[9rem] pr-[2rem] h-[100svh] -mt-24 flex relative overflow-hidden">

      
      <img src={topBack} className=' home-wave home-wave-1 absolute top-0 w-full left-0 right-0 ' alt="" />
      <img src={topForward1} className=' home-wave home-wave-2 absolute top-0 w-full left-0 right-0 z-10' alt="" />
      <img src={topForward2} className=' home-wave home-wave-3 absolute top-0 w-full left-0 right-0 z-10' alt="" />
      <img src={topForward3} className=' home-wave home-wave-4 absolute top-0 w-full left-0 right-0 z-10' alt="" />
      <img src={bottomBack1} className=' home-wave home-wave-5 absolute bottom-0 w-full left-0 right-0 z-[9]' alt="" />
      <img src={bottomBack2} className=' home-wave home-wave-6 absolute bottom-0 w-full left-0 right-0 z-[9] ' alt="" />
      <div className="headder-texts mt-auto flex-1 mb-auto z-[5]">
        <h5 className="text-[0.95rem] opacity-40">Connect with like-minds!</h5>
        <h1 className='text-[4.25rem] font-bold tracking-tight mb-[1rem] mt-0 bg-gradient-to-t from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0.5)]  bg-clip-text text-transparent'>Chreate your circle:</h1>
        <h2 className='text-[3rem] font-semibold -mb-4 gradient-text'>Join Conversations</h2>
        <h2 className='text-[3rem] font-semibold'>That Matter!</h2>

        <button className=' pl-8 border-[4px] flex  leading-[63px] font-bold text-[50px] rounded-full mt-16 w-full text-start max-w-[480px] justify-between items-center'>
          <span className=' learn-more-btn font-sans mb-1'>Learn more</span>
          <div className="rounded-full aspect-square h-[3.7rem] border-[4px] m-1 self-end flex justify-center items-center pt-1 "><img src={dropDown} alt="" /></div>
        </button>
      </div>
      <div className="flex-1 mt-auto mb-auto flex items-end">
        <img src={chatcircleBuildings} className=' w-[100%] cc-buildings scale-110 mt-36 flex-grow  max-w-none relative z-[9]' alt="" />
      </div>
    </div>
  )
}

export default HomeScreen