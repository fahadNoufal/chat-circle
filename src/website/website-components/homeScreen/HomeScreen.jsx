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
import {Link} from 'react-scroll'


const HomeScreen = () => {

  gsap.registerPlugin(ScrollTrigger)
  
  useEffect(()=>{
    let homeScrollTl=gsap.timeline();
    homeScrollTl.to(['.home-left-section','.home-img-container'],{x:'-150%'})
    homeScrollTl.to('.home-text' ,{x:'110%'},'<')
    homeScrollTl.to(['.home-play-navigation','.gallery-dots'],{y:200},'<')
    homeScrollTl.to('.nav-logo',{opacity:1,x:0})
    
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
    <div className='home-page w-full z-10 relative flex h-[100svh] overflow-hidden' id='home-screen'>
        <div className=" home-left-section home-left-bg  relative flex flex-1 overflow-hidden h-full -ml-[50px] lg:ml-0 lg:-mr-8">
            <span className=' absolute -rotate-90 text-[120px] md:text-[310px] anton-font left-[-70px] lg:-left-[360px] md:-left-[330px] opacity-30 bottom-[230px] lg:bottom-[240px]'>
                Connect
            </span>
        </div>
        <div className="flex relative md:flex-row md:mt-0 justify-center  flex-col flex-[2] ">
            <div className=' home-img-container md:-ml-[28%] rounded-3xl flex justify-center md:items-center '>
                <img src={homeImg1} className=' md:mt-20 w-full md:w-[95%] max-w-[400px] lg:max-w-[530px] xl:max-w-[650px] 2xl:max-w-[760px]' alt="" />
            </div>
            <div className="home-text md:-ml-[3%] md:max-w-max max-w-[400px] flex md:mt-0 mt-[-100px] md:justify-center scale-75 md:scale-90 w-full px-2 flex-col   " >
                <div className=' relative '>
                    <span className=' absolute flex items-center w-full h-full' >
                        <span className=' lg:text-[3.5rem] text-[2.5rem] xl:text-[4.5rem] 2xl:text-[5.7rem] text-[#e6e6e6] tracking-[3px] z-[10] font-black'>THE CIRCLE</span>
                    </span>
                    <h2 className=' anton-font xl:text-[18rem] text-[9rem] lg:text-[11rem] tracking-wider opacity-30 z-[-10] '>CC</h2>
                </div>
                <div className='flex pl-2  tracking-[3px] pt-10 lg:pt-5 -mt-[80px] gap-[10px] text-[1.2rem] font-bold items-center' >
                    <span className='opacity-40 '>
                        Join Now
                    </span>
                    <img src={rightDoubleArrow} className='mt-1' alt="" />
                </div>
                <span className=' pl-2 tracking-[2px] lg:tracking-[3px] mt-[30px] text-[1.1rem] text-[#c0c0c0] lg:leading-loose md:w-[85%]'>
                    <span className="font-semibold text-[1.3em] ">
                        Welcome to our chat-based social media application! 
                    </span> 
                    <div className=' leading-6 mt-4' >
                    Connect with people worldwide <span className="hidden sm:inline-block">, share your thoughts, and engage in meaningful conversations.</span>
                    </div>
                </span>
                <div className=" flex text-[1.1rem] pl-2 mt-8 gap-4 md:gap-[80px]">
                    <Link to='join' spy={true} smooth={true} offset={-100} duration={1500}  className="flex border md:border-none md:p-0 px-2 py-[2px] gap-2 md:gap-4">
                        <img src={featuresIcon} className='md:-mt-1' alt="" />
                        <span>Join Now</span>
                    </Link>
                    <a href=' ' className="md:flex gap-4 hidden">
                        <img src={contactIcon} className=' aspect-square h-[97%] ' alt="" />
                        <span>Contact</span>
                    </a>
                </div>
            </div>
        </div>
        <div className="gallery-dots lg:flex absolute bottom-8 hidden   gap-3  justify-center w-full">
            <div className="w-3 aspect-square rounded-full bg-white"></div>
            <div className="w-3 aspect-square rounded-full bg-white"></div>
            <div className="w-3 aspect-square rounded-full bg-white"></div>
        </div>
        <div className=" home-play-navigation flex absolute bottom-6 lg:right-[4rem] right-4 ">
            <div className='ml-auto flex text-[1.1rem] gap-[80px] opacity-80'>
                <div className="home-play-navigation lg:flex gap-8 hidden">
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