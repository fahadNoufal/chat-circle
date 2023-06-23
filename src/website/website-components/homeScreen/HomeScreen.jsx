import React, { useEffect } from 'react'
import homeImg1 from '../../website-images/homeImg1.png'
import rightDoubleArrow from '../../website-images/right-double-arrow.svg'
import featuresIcon from '../../website-images/featuresIcon.svg'
import contactIcon from '../../website-images/contactIcon.png'
import prevIcon from '../../website-images/previousIcon.svg'
import nextIcon from '../../website-images/nextIcon.svg'
import doubleDown from '../../website-images/double-down-icon.svg'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'



const HomeScreen = () => {

  gsap.registerPlugin(ScrollTrigger)
  
  useEffect(()=>{
    let homeScrollTl=gsap.timeline();
    homeScrollTl.to(['.home-left-section','.home-img-container'],{x:'-150%'})
    homeScrollTl.to('.home-text' ,{x:'110%'},'<')
    homeScrollTl.to(['.home-play-navigation','.gallery-dots'],{y:200},'<')
    
    ScrollTrigger.create({
      trigger:'.home-page',
      animation:homeScrollTl,
      start:'top top',
      end :'bottom 30%',
      scrub:4,
      ease:'power3.easeInOut',
      pin:true,
      pinSpacing:false,
    })
  },[])


  return (
    <div className='home-page w-full z-10 relative flex h-[100svh] overflow-hidden'>
        <div className=" home-left-section relative flex flex-1 bg-yellow overflow-hidden h-full -mr-8">
            <span className=' absolute -rotate-90 text-[310px] anton-font -left-[360px] opacity-30 bottom-[240px]'>
                Connect
            </span>
            
        </div>
        <div className="flex relative flex-[2]">
            <div className=' home-img-container -ml-[28%] flex justify-center items-center '>
                <img src={homeImg1} className=' mt-20 w-[95%]' alt="" />
            </div>
            <div className="home-text flex-grow  -ml-[3%] flex flex-col justify-center w-[1%]  " >
                <div className=' relative '>
                    <span className=' absolute flex items-center w-full h-full' >
                        <span className=' text-[5.7rem] text-[#f9f9f9] font-extrabold tracking-[3px] '>THE CIRCLE</span>
                    </span>
                    <h2 className=' anton-font text-[300px] tracking-wider opacity-30 '>03</h2>
                </div>
                <div className='flex pl-2 tracking-[3px] -mt-[80px] gap-[10px] text-[1.2rem] font-bold items-center' >
                    <span className=' opacity-40 '>
                        STEP ENTRY
                    </span>
                    <img src={rightDoubleArrow} className='mt-1' alt="" />
                </div>
                <span className=' pl-2 tracking-[3px] mt-[50px] text-[1.1rem] text-[#c0c0c0] leading-loose w-[85%]'>
                    Step into a world of limitless conversations, where 
                    ideas flourish and connections come alive with Chat Circle!
                </span>
                <div className=" flex text-[1.1rem] pl-2 mt-8 gap-[80px]">
                    <div className="flex gap-4">
                        <img src={featuresIcon} className='-mt-1' alt="" />
                        <span>Features</span>
                    </div>
                    <div className="flex gap-4">
                        <img src={contactIcon} className=' aspect-square h-[97%] ' alt="" />
                        <span>Contact</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="gallery-dots flex absolute bottom-8   gap-3  justify-center w-full">
                <div className="w-3 aspect-square rounded-full bg-white"></div>
                <div className="w-3 aspect-square rounded-full bg-white"></div>
                <div className="w-3 aspect-square rounded-full bg-white"></div>
        </div>
        <div className=" home-play-navigation flex absolute bottom-16 right-[4rem] ">
                <div className='ml-auto flex text-[1.1rem] gap-[80px] opacity-80'>
                    <div className="home-play-navigation flex gap-8">
                        <span className='flex items-center gap-5'>
                            <img src={prevIcon} alt="" />
                            <span>Previous</span>
                        </span>
                        <span className=' h-full w-[2px] bg-white'></span>
                        <span className='flex items-center gap-5'>
                            <span>Next</span>
                            <img src={nextIcon} alt="" className='mt-1' />
                        </span>
                    </div>
                    <span>
                        <img src={doubleDown} alt="" className='mt-2 mr-2' />
                    </span>
                </div>
        </div>
    </div>
  )
}

export default HomeScreen