import React from 'react'
import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

const RunningText = () => {
  gsap.registerPlugin(ScrollTrigger)
  useEffect(()=>{
    const tl=gsap.timeline()
    tl.to('.running-banner',{x:0,y:0})
    ScrollTrigger.create({
        trigger:'.running-banner-container',
        animation:tl,
        start:'top 110%',
        end:'bottom bottom',
        scrub:10,
        ease:'power3.easeInOut',
    })
    
  },[])
  return (
    <div className=' text-[5rem] lg:text-[11rem] running-banner-container relative h-[30svh] lg:h-[100svh] flex justify-center items-center w-full mt-[200px] whitespace-nowrap overflow-x-clip'>
        <div className=" running-banner translate-y-[500px] translate-x-[70%] top-[] rt-1 rotate-[35deg]  md:rotate-[26deg] ">MAKE REAL CONNECTIONS IN THE CIRCLE</div>
        {/* <div className=" running-banner translate-x-[0%] top-[40%] rt-1 rotate-[8.5deg] ">MAKE REAL CONNECTIONS IN THE CIRCLE</div> */}
        <div className=" running-banner translate-y-[500px] translate-x-[-20%] top-[] rt-2 rotate-[-35deg] md:rotate-[-26deg] ">MAKE REAL CONNECTIONS IN THE CIRCLE</div>
        <div className=" running-banner translate-x-[-100%] rotate-6  rt-3  ">MAKE REAL CONNECTIONS IN THE CIRCLE</div>
    </div>
  )
}

export default RunningText