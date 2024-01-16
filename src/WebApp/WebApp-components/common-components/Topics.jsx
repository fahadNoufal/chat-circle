import React from 'react'
import { useLoaderData, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTopic } from "../../../features/topics/topicsSlice";


const url="https://fahadnoufal.pythonanywhere.com"

const Topics = () => {
    const {topics,room_count}=useLoaderData()
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const TopicItem = ({ topic, count }) => {
        return (
          <NavLink to='/app' onClick={()=>{dispatch(setTopic(topic))}}>
            <div  className="py-[12px] shadow-lg ml-0 sm:-ml-2 pl-[25px] pr-[14px]  flex rounded-[14px] items-center bg-gradient-to-r to-[rgba(0,0,0,0.5)] from-[rgba(0,0,0,0.15)] justify-between">
              <span className="text-[1rem] text-[#9d9d9d] overflow-hidden whitespace-nowrap mr-3 tracking-[3px]">
                {topic}
              </span>
              <div className="bg-[#222222] min-w-[45px] flex text-[1rem] text-[#189cb9] justify-center items-center rounded-[5px] px-[12px] h-[35px]">
                {count}
              </div>
            </div>
          </NavLink>
        );
      };

      const topic_list = topics?topics.map((item) => (
        <TopicItem key={item.name} topic={item.name} count={item.room_count} />
      )):''

  return (
    <div className=" topic-container-page w-full py-[2.9rem] h-[91svh]  gap-[0.5rem] flex bg-[#1E1E1E] md:hidden flex-col items-center ">
      <div className="topic-page-section h-full overflow-scroll text-left w-[70%] ">
        <h1 className=" opacity-75 text-[1.9rem] -ml-1 font-medium tracking-[3px]">
            Topics
        </h1>
        <h3 className=" text-[12px] font-semibold mt-[10px] mb-[18px] text-[#6a6a6a] tracking-[2px]">
          Browse topics
        </h3>
       
        <ul className=" flex flex-col  lg:min-w-[190px] gap-[14px]">
          <NavLink to='/app' onClick={()=>{dispatch(setTopic(''));navigate('/app')}}>
            <div  className="py-[12px] shadow-lg ml-0 sm:-ml-2  pl-[25px] pr-[14px] flex rounded-[14px] items-center bg-gradient-to-r to-[rgba(117,117,117,0.5)] from-[rgba(89,89,89,0.15)] justify-between">
              <span className="text-[1rem] font-semibold text-[#189cb9] tracking-[3px]">
                All
              </span>
              <div className="bg-[#222222] min-w-[45px] flex text-[1rem] text-[#189cb9] justify-center items-center rounded-[5px] px-[12px] h-[35px]">
                {room_count}
              </div>
            </div>
          </NavLink>
          {topic_list}
        </ul>
        {/* <div className="text-[1.1rem] opacity-60 text-blueRoom font-medium flex gap-4  pl-5 my-6 items-center cursor-pointer " onClick={()=>{dispatch(setTopic(''))}} > More <span>{ <img className=" w-[18px]" src={moreIcon} alt="" /> }</span>  </div> */}
      </div>  
    </div>
  )
}

export default Topics

export const topicsLoader= async()=>{
    
  const res=await fetch(`${url}/api/topics/`)
  return res.json()
}