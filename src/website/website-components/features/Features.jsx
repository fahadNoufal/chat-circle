import React, { useEffect } from "react";
import connect from "../../website-images/feature-card-connectVector.svg";
import explore from "../../website-images/feature-card-exploreVector.svg";
import learn from "../../website-images/feature-card-learnVector.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Features = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".feature-heading-1",
        start: "50% bottom",
        end: "top top",
        toggleActions: "play play play reverse",

      },
    });
    tl.to(
      [".feature-card-container", ".feature-heading-1",],
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
      },
      "<"
    );

    
  });

  return (
    <div
      id="features"
      className=" features flex relative flex-col justify-center items-center pb-24 md:pb-40 overflow-hidden"
    >
      <div className="running-container  mt-0 mb-0  opacity-[0.15]">
        <div className="running-text lg:text-[380px] text-[120px]  text-center w-full bg-black border-x-0 pl-4">
          <h2 className=" text-[#555555]  tracking-[5px] font-semibold anton-font lg:tracking-widest step-running-text break-keep">
            FEATURES
          </h2>
        </div>
      </div>
      <div className=" text-[2.1rem] lg:text-[3.6rem] mt-20 lg:mt-0 feature-heading-1 text-center opacity-0 translate-y-[100px]">
        <h2 className=" font-bold  ">
          Upgrade yourself by joining
        </h2>
        <div className="">
          <h2 className="   cc-feature-head font-bold lg:-mt-2 ">
            {" "}
            <span className="gradient-text"> Chat Circle </span>
          </h2>
          <h2 className=" text-[1.2rem] mt-8 -mb-5 opacity-70  ">
            Use
            <span className=" "> chat circle  </span>
            Today To 
          </h2>
        </div>
      </div>
      <div className=" feature-card-container  opacity-0 flex gap-7 lg:gap-[7rem] flex-col md:flex-row justify-between mt-[3.4rem] lg:mt-[7.5rem]  translate-y-[250px] scale-90 ">
        <div className="feature-card scale-90 lg:scale-100 pb-4 flex-1  ">
          <img src={connect} className="connect-feature-icon -mt-[15px] " alt="" />
          <h3 className="connect-card">Connect</h3>
        </div>
        <div className="feature-card scale-90 lg:scale-125 flex-1 ">
          <img src={explore} alt="" />
          <h3>Explore</h3>
        </div>
        <div className="feature-card scale-90 lg:scale-100 flex-1 pt-1">
          <img src={learn} alt="" />
          <h3>Learn</h3>
        </div>
      </div>
      <h2 className="  absolute bottom-0  text-[2rem] cc-feature-head font-bold lg:-mt-2 ">
        <span className="gradient-text"> With People</span>
      </h2>
      
    </div>
  );
};

export default Features;
