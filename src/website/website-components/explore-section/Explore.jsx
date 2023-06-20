import React, { useEffect } from 'react'
import explore from '../../website-images/explore-text.svg'
import desktop from '../../website-images/desktop-illustration.png'
import float1 from '../../website-images/explore-right-circle.svg'
import float2 from '../../website-images/explore-left-circle.svg'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Explore = () => {

  useEffect(()=>{
    const tl=gsap.timeline({repeat:1,onComplete:()=>{gsap.set('.explore-text',{opacity:1})}})
    tl.to('.explore-text',{opacity:1,duration:0.1,delay:0.2})
    tl.to('.explore-text',{opacity:0,duration:0.1,delay:0.2})

    gsap.to('.explore-text',{opacity:1,scrollTrigger:{
        animate:tl,
        trigger:'.explore-text',
        start:'top 80%',
        end:'bottom 20%',
        onEnter:()=>{tl.restart()},
        onLeave:()=>{gsap.to('.explore-text',{opacity:0})},
        onEnterBack:()=>{gsap.to('.explore-text',{opacity:1})},
        onLeaveBack:()=>{gsap.to('.explore-text',{opacity:0})}
    }})

    gsap.to(['explore-f1','.explore-f2'],{x:0,y:0,scrollTrigger:{
        trigger:'.explore-text',
        start:'top 50%',
        scrub:2,
        end:'50% 20%',
    }})
    gsap.to('.explore-reveal',{
        y:0,duration:0.5,ease:'power3.easeInOut',scrollTrigger:{
            trigger:'.explore-reveal',
            start:'top bottom',
            end:'top top',
            toggleActions:'play play play reverse  ',
        }
    })

  },[])

  
  return (
    <div className=' explore relative overflow-hidden w-full mt-40  '>
        <div className=' flex justify-center absolute top-8 z-[2] right-20 left-20 '>
            <img src={explore} className=' opacity-0 explore-text text-center' alt="" />
        </div>
        <div className="flex justify-center pt-24">
            <img src={desktop} className='z-[5] relative w-[60%]' alt="" />
        </div>
        <div className=" explore-reveal  text-[4.5rem] translate-y-[100px] text-center pt-4 font-semibold">
            <div className="text-reveal-cards transition-transform " >
                <span className="gradient-text">Connect </span>
                with new  
                <span className="gradient-text"> people</span> 
            </div> 
        </div>
        <img src={float1} className=' explore-f1 translate-x-40 absolute -bottom-10 h-[600px] rotate-0  z-0 right-0' alt="" />
        <img src={float2} className=' explore-f2 absolute bottom-0 h translate-y-[300px] translate-x-[-700px] z-0 left-0' alt="" />

    </div>
  )
}

export default Explore