import React from "react";
import profile1 from '../../../WebApp-images/profiles/profile1.png'
import profile2 from '../../../WebApp-images/profiles/profile2.png'
import profile3 from '../../../WebApp-images/profiles/profile3.png'
import profile4 from '../../../WebApp-images/profiles/profile4.png'
import ProfilePic from "../ProfilePic";
import moreIcon from '../../../WebApp-images/expand_more.svg'

// import profile5 from '../../../WebApp-images/profiles/profile5.png'
// import profile6 from '../../../WebApp-images/profiles/profile6.png'
// import profile7 from '../../../WebApp-images/profiles/profile7.png'



const LeftBar = () => {
  let topicDetails = [
    { topic: "Python", count: 9 },
    { topic: "JavaScript", count: 23 },
    { topic: "Django", count: 19 },
    { topic: "Time", count: 6 },
    { topic: "DataScience", count: 3 },
  ];

  let profileDetails=[
    {profile:profile1,name:'Bradley box'},
    {profile:profile2,name:'Peter Autho'},
    {profile:profile3,name:'Jacob Alex'},
    {profile:profile4,name:'Bradley box'},
  ]


  const TopicItem = ({ topic, count }) => {
    return (
      <li>
        <div className="py-[12px] shadow-lg -ml-2 pl-[25px] pr-[14px] flex rounded-[14px] items-center bg-gradient-to-r to-[rgba(0,0,0,0.5)] from-[rgba(0,0,0,0.15)] justify-between">
          <span className="text-[1rem] text-[#9d9d9d] tracking-[3px]">
            {topic}
          </span>
          <div className="bg-[#222222] min-w-[45px] flex text-[1rem] text-[#189cb9] justify-center items-center rounded-[5px] px-[12px] h-[35px]">
            {count}
          </div>
        </div>
      </li>
    );
  };

  const Profile=({profile,name})=>{
    return(
      <div className="discover-profile-item flex-col self-start justify-between items-center p-[14px] rounded-[10px] flex bg-[#040404] text-[0.8rem]">
        <ProfilePic profile={profile} width='60' />
        <span className="discover-profile-name text-center max-w-[100px] font-bold mt-[8px]">
          {name} 
        </span>
      </div>
    )
  }

  const profiles=profileDetails.map((item,index)=>(<Profile profile={item.profile} name={item.name} key={index} />))

  const topics = topicDetails.map((item) => (
    <TopicItem key={item.topic} topic={item.topic} count={item.count} />
  ));

  return (
    <div className="left-bar w-full py-[2.9rem]  gap-[0.5rem] bg-[#1E1E1E] flex flex-col items-center max-w-[370px]">
      <div className="left-topic-section text-left w-[70%]">
        <h1 className=" opacity-75 text-[1.9rem] -ml-1 font-medium tracking-[3px]">
            Topics
        </h1>
        <h3 className=" text-[12px] font-semibold mt-[30px] mb-[28px] text-[#6a6a6a] tracking-[6px]">
          Browse topics
        </h3>
        <ul className=" flex flex-col min-w-[190px] gap-[14px]">{topics}</ul>
        <div className="text-[1.1rem] text-blueRoom font-medium flex gap-4 opacity-80 pl-5 my-6 items-center cursor-pointer " > All <span>{ <img className=" w-[18px]" src={moreIcon} alt="" /> }</span>  </div>
      </div>  
      <div className="discover-people">
        <h1 className="opacity-75 text-[1.5rem] mb-[22px] -ml-1 font-medium tracking-[3px]">
          Discover people
        </h1>
        <div className="grid-profiles flex  items-center">
          <div className=" grid gap-[12px] grid-cols-2 ">
            {profiles}

          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
