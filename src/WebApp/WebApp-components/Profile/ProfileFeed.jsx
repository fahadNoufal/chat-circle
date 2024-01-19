import React from "react";
import ProfilePic from "../common-components/ProfilePic";
import Feed from "../common-components/Feed";
import { useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";

const url="https://fahadnoufal.pythonanywhere.com"

const ProfileFeed = () => {

  const profilePics=useSelector(store=>store.profile.profiles)

  const {rooms,host}=useLoaderData()

  return (
    <div className=" flex  flex-col max-w-[850px] px-10  xl:px-0">
      <div className="user-profile scale-[0.8] md:scale-100 flex flex-col items-center pt-[40px]">
        <ProfilePic profile={profilePics[host.avatar]} width="150" />
        <span className=" text-[1.88rem] mt-2 tracking-[3px] font-semibold py-4">
          {host.username}
        </span>

      </div>
      <div className="user-bio text-[#a1a1a1] mt-2">
        <span className=" text-lg md:text-[1.4rem] font-bold mb-[28px] tracking-[4px]">About</span>
        <p className=" text-[0.9rem] md:text-[1.13rem] tracking-wide ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illo tenetur facilis sunt nemo debitis quisquam hic atque aut? Ducimus alias placeat optio accusamus repudiandae quis ab ex exercitationem rem?
            {/* add dynamic discription */}
        </p>
      </div>
      <div className="rooms-created my-[30px] text-[1.1rem] md:text-[1.4rem] tracking-widest font-bold">
        Rooms created by <span className="text-yellow">{host.username}</span>
      </div>
      <span className=" font-medium tracking-widest mb-[27px]">{rooms.length} rooms available</span>

      <Feed rooms={rooms} />
    </div>
  );
};

export default ProfileFeed;

export const userLoader=async ({params})=>{
  const {id}=params
  const res=await fetch(`${url}/api/user/${id}/`)
  return res.json()
}