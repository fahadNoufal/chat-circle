import React, { useEffect } from "react";
import createRoomHead from "../../website-images/create-room-head-img.svg";
import meetFriendsHead from "../../website-images/meet-friends-head-img.svg";
import shareHead from "../../website-images/share-head-img.svg";
import createFloat1 from "./../../website-images/create-room-floating-1.png";
import createFloat2 from "./../../website-images/create-room-floating-2.png";
import createFloat3 from "./../../website-images/create-room-floating-3.png";
import createFloat4 from "./../../website-images/create-room-floating-4.png";

import meetFloat1 from "./../../website-images/meet-float-1.png";
import meetFloat2 from "./../../website-images/meet-float-2.svg";
import meetFloat3 from "./../../website-images/meet-float-3.svg";

import shareFloat1 from "./../../website-images/share-float-1.png";
import shareFloat2 from "./../../website-images/share-float-2.png";
import shareFloat3 from "./../../website-images/share-float-3.png";

import counter1 from "./../../website-images/started-counter-1.svg";
import counter2 from "./../../website-images/started-counter-2.svg";
import counter3 from "./../../website-images/started-counter-3.svg";

// import people from '../../website-images/people-pixal-art.png'

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from "gsap/MotionPathPlugin";



const GettingStarted = () => {

  gsap.registerPlugin(MotionPathPlugin)
  gsap.registerPlugin(ScrollTrigger)


  useEffect(()=>{

    let sections= gsap.utils.toArray('.cc-card-screen')

    let hor=gsap.to(sections,{
      xPercent:-100*(sections.length-1),
      ease:'none',
      scrub:2,

      scrollTrigger:{
        trigger:'.chatcircle-cards',
        pin:true,
        start:'top top',
        end:'+=4000',
        scrub:2,
        snap: {
          snapTo: 1 / (sections.length - 1),
          duration: 0.6,
          delay: 0.01,
          ease: "power1.inOut"
        },
      }
    })

      let cont2Tl=gsap.timeline({paused:true})
      cont2Tl.set(['.float-img-5','.float-img-6','.float-img-7'],{xPercent:-50,yPercent:-50, transformOrigin:"50% 50%"})
      cont2Tl.to('.float-img-5',{ ease:'none', rotation:'+=720',duration:19,repeat:5,motionPath:{path:"#float-path-2",align:'#float-path-2'}})
      cont2Tl.to('.float-img-6',{ ease:'none', rotation:'+=720',duration:19,repeat:5,motionPath:{path:"#float-path-2",align:'#float-path-2',end:1.33,start:0.33,}},'<')
      cont2Tl.to('.float-img-7',{ ease:'none', rotation:'+=720',duration:19,repeat:5,motionPath:{path:"#float-path-2",align:'#float-path-2', end:1.66,start:0.66,}},'<')

      let cont3Tl=gsap.timeline({paused:true})
      cont3Tl.to('.float-img-8',{ ease:'none', duration:19,repeat:5,motionPath:{path:"#float-path-3",align:'#float-path-3',autoRotate:false }})
      cont3Tl.to('.float-img-9',{ ease:'none', duration:19,repeat:5,motionPath:{path:"#float-path-3",align:'#float-path-3',autoRotate:true,end:1.33,start:0.33,}},'<')
      cont3Tl.to('.float-img-10',{ ease:'none', duration:19,repeat:5,motionPath:{path:"#float-path-3",align:'#float-path-3',autoRotate:false, end:1.66,start:0.66,}},'<')
  
      gsap.set(['.float-img-1','.float-img-2','.float-img-3','.float-img-4'],{xPercent:-50,yPercent:-50, transformOrigin:"50% 50%"})
      let cont1Tl=gsap.timeline({paused:true,scrollTrigger:{
        trigger:'.cc-card-screen-1',
        start:'top bottom',
        toggleActions:'play pause play pause'
      }})

      ScrollTrigger.create({
        trigger:'.container-1',
        containerAnimation:hor,
        start:'right left',
        onEnter:()=>{cont1Tl.pause()},
        onEnterBack:()=>{cont1Tl.play()}
      })
      ScrollTrigger.create({
        trigger:'.container-2',
        containerAnimation:hor,
        start:'left right',
        end:'right left',
        onEnter:()=>{cont2Tl.play()},
        onLeave:()=>{cont2Tl.pause()},
        onEnterBack:()=>{cont2Tl.play()},
        onLeaveBack:()=>{cont2Tl.pause()}
      })
      ScrollTrigger.create({
        trigger:'.container-3',
        containerAnimation:hor,
        start:'left right',
        onEnter:()=>{cont3Tl.play()},
        onLeaveBack:()=>{cont3Tl.pause()}
      })
      ScrollTrigger.create({
        trigger:'.join-banner',
        start:'top top',
        onEnter:()=>{cont3Tl.pause()},
        onLeaveBack:()=>{cont3Tl.play()},
      })

      gsap.to('.getting-started-text',{opacity:0.1,duration:0.5,y:0,scrollTrigger:{
        trigger:'.getting-started-text',
        start:'top 87%',
        end:'20% top',
        toggleActions:'play play play reverse',
      }})

      gsap.to('.counter-1',{y:0,opacity:0.8,scrollTrigger:{
        trigger:'.counter-1',
        containerAnimation:hor,
        start:'left 50%',
        end:'right 50%',
        duration:1.5,
        toggleActions:'play reverse play reverse',
        // end:'left right',
      }})
      gsap.to('.counter-2',{y:0,opacity:0.8,scrollTrigger:{
        trigger:'.counter-2',
        containerAnimation:hor,
        start:'left 50%',
        end:'right 50%',
        duration:1.5,
        toggleActions:'play reverse play reverse',
        // end:'left right',
      }})
      gsap.to('.counter-3',{y:0,opacity:0.8,scrollTrigger:{
        trigger:'.counter-3',
        containerAnimation:hor,
        start:'left 50%',
        end:'right 50%',
        duration:1.5,
        toggleActions:'play reverse play reverse',
        // end:'left right',
      }})

      cont1Tl.to('.float-img-1',{ ease:'none', rotation:'+=720', duration:19,repeat:5,motionPath:{path:"#float-path-1",align:'#float-path-1' }})
      cont1Tl.to('.float-img-2',{ ease:'none', rotation:'+=720', duration:19,repeat:5,motionPath:{path:"#float-path-1",align:'#float-path-1',end:1.25,start:0.25,}},"<")
      cont1Tl.to('.float-img-3',{ ease:'none', rotation:'+=720', duration:19,repeat:5,motionPath:{path:"#float-path-1",align:'#float-path-1', end:1.5,start:0.5,}},"<")
      cont1Tl.to('.float-img-4',{ ease:'none', rotation:'+=720', duration:19,repeat:5,motionPath:{path:"#float-path-1",align:'#float-path-1',start:0.75,end:1.75}},"<")

      
      gsap.set(['.float-img-8','.float-img-9','.float-img-10'],{xPercent:-50,yPercent:-50, transformOrigin:"50% 50%"})
      
    gsap.to('.chatcircle-cards-header',{y:0, duration:0.6,opacity:1,scrollTrigger:{
      trigger:'.chatcircle-cards-h2',
      start:'70% bottom',
      toggleActions:'restart play play reverse '
    }})
    return () => {
      ScrollTrigger.getAll().forEach((instance) => {
        instance.kill();
      });
    };

  },[])
  return (
    <div className="  pt-32 " id="getting-started">
      <div className='relative'>
        
        {/* <img src={people} className=' text-center flex left-0 right-0 items-center justify-center absolute -top-44 opacity-20 mx-auto ' alt=""  /> */}
      </div>

      <div className="chatcircle-cards-header text-[3.9rem] mt-[150px] mb-[2rem] translate-y-[50px] opacity-0 font-semibold text-center flex justify-center w-full">
        <h2 className="chatcircle-cards-h2 w-[50%]">
          <span className="text-reveal-cards"><span className="gradient-text">Experience</span></span> a seamless entry
          into your <span className="text-reveal-cards"><span className="gradient-text cards-text-reveal">circle</span></span>
        </h2>
      </div>
      <div className="chatcircle-cards flex flex-c w-full flex-nowrap items-center">
        <div className="cc-card-screen cc-card-screen-1">
          <div className="w-[100vw] items-center justify-center flex ">
            <div className="chatcircle-card  container-1 h-[80svh]">
            <div className="cc-card-items flex  ">
              
              <div className="card-image flex-1">
                <img src={createRoomHead} alt="" />
              </div>
              
              <div className="card-details flex-1">
                <h3>Create Rooms</h3>
                <p>
                  Unlock the power of focused conversations in topic-specific
                  rooms, where passionate individuals gather to share ideas,
                  exchange perspectives, and create meaningful connections that
                  spark inspiration.
                </p>
              </div>
              
              <img
                src={createFloat2}
                className=" floating-img float-img-1 -top-28"
                alt=""
              />
              <img
                src={createFloat1}
                className=" floating-img float-img-2 -top-4 -right-[6rem]"
                alt=""
              />
              <img
                src={createFloat3}
                className=" floating-img float-img-3 bottom-0 -left-28"
                alt=""
              />
              <img
                src={createFloat4}
                className=" floating-img float-img-4 -bottom-[6rem] right-28"
                alt=""
              />
              <svg width="1066" height="688" className="absolute top-[-18px] left-[-10px]" viewBox="0 0 1066 688" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id='float-path-1' fillRule="evenodd" clipRule="evenodd" d="M560 14.0001C686 -17.5 928.121 5.74625 1014.5 94.0003C1135.41 201.549 1006.5 597 973.131 636.058C920.183 719.77 654.593 623.945 530.365 663.086C412.458 700.234 256.451 693.867 149.72 645.63C96.5632 623.106 50.2291 595.362 19.4747 486.496C-11.0131 378.575 -15.0237 167.859 96.5632 98.8747C197.666 36.3721 426.029 47.4929 560 14.0001Z" />
              </svg>
            </div>
          </div>
          <img src={counter1} className=" counter-1 translate-y-[100px] opacity-0 z-[-1] absolute bottom-6 " alt="" />

          </div>
        </div>
        <div className="cc-card-screen">
        <div className="w-[100vw] items-center justify-center flex">
        <div className="chatcircle-card  container-2 h-[80svh]">
            <div className="cc-card-items ">
              <div className="card-image flex-1">
                <img src={meetFriendsHead} alt="" />
              </div>
              
              <div className="card-details flex-1  ">
                <h3>Meet Exciting People!</h3>
                <p>
                  Expand your horizons and embrace new connections in our Rooms
                  as you step out and meet new people, where bonds are formed
                  and ideas are shared
                </p>
              </div>
              
              <img
                src={meetFloat1}
                className=" floating-img float-img-5 -left-28 -top-10"
                alt=""
              />
              <img
                src={meetFloat2}
                className=" floating-img float-img-6 top-4 -right-[6rem]"
                alt=""
              />
              <img
                src={meetFloat3}
                className=" floating-img float-img-7 -bottom-[7rem] left-[18rem]"
                alt=""
              />
              <svg width="1066" height="688" className="absolute top-[-18px] left-[-10px]" viewBox="0 0 1066 688" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id='float-path-2' fillRule="evenodd" clipRule="evenodd" d="M560 14.0001C686 -17.5 928.121 5.74625 1014.5 94.0003C1135.41 201.549 1006.5 597 973.131 636.058C920.183 719.77 654.593 623.945 530.365 663.086C412.458 700.234 256.451 693.867 149.72 645.63C96.5632 623.106 50.2291 595.362 19.4747 486.496C-11.0131 378.575 -15.0237 167.859 96.5632 98.8747C197.666 36.3721 426.029 47.4929 560 14.0001Z" />
              </svg>
            </div>
          </div>
          <img src={counter2} className=" counter-2 translate-y-[100px] opacity-0 z-[-1] absolute bottom-6 " alt="" />
        </div>
          
        </div>
        <div className="cc-card-screen cc-card-screen-3">
          <div className="w-[100vw] items-center justify-center flex">
          <div className="chatcircle-card container-3 h-[80svh]">
            <div className="cc-card-items">
              
              <div className="card-image flex-1">
                <img src={shareHead} alt="" />
              </div>
              <div className="card-details flex-1">
                <h3>Share Your Knowledge</h3>
                <p>
                  Expand your horizons and embrace new connections in our Rooms
                  as you step out and meet new people, where bonds are formed
                  and ideas are shared
                </p>
              </div>
              
              <img
                src={shareFloat1}
                className=" floating-img float-img-8 -left-[15rem] -top-[19rem]"
                alt=""
              />
              <img
                src={shareFloat2}
                className=" floating-img float-img-9 top-24 -right-[6rem] "
                alt=""
              />
              <img
                src={shareFloat3}
                className=" floating-img float-img-10 -bottom-[7rem] left-[15rem] "
                alt=""
              />
              <svg width="1066" height="688" className="absolute top-[-18px] left-[-10px]" viewBox="0 0 1066 688" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id='float-path-3' fillRule="evenodd" clipRule="evenodd" d="M560 14.0001C686 -17.5 928.121 5.74625 1014.5 94.0003C1135.41 201.549 1006.5 597 973.131 636.058C920.183 719.77 654.593 623.945 530.365 663.086C412.458 700.234 256.451 693.867 149.72 645.63C96.5632 623.106 50.2291 595.362 19.4747 486.496C-11.0131 378.575 -15.0237 167.859 96.5632 98.8747C197.666 36.3721 426.029 47.4929 560 14.0001Z" />
              </svg>
            </div>

          </div>
          <img src={counter3} className=" counter-3 translate-y-[100px] opacity-0 z-[-1] absolute bottom-6 " alt="" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default GettingStarted