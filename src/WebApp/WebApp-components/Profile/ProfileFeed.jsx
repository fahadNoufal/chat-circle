import React from "react";
import ProfilePic from "../common-components/ProfilePic";
import profile from "../../WebApp-images/profiles/profile8.png";
import Feed from "../common-components/Feed";

const ProfileFeed = () => {
  return (
    <div className=" flex flex-col max-w-[850px]">
      <div className="user-profile flex flex-col items-center pt-[40px]">
        <ProfilePic profile={profile} width="150" />
        <span className=" text-[1.88rem] mt-2 tracking-[3px] font-semibold">
          Amore Tore
        </span>
        <button className=" text-blueRoom mt-2 tracking-[2px] font-semibold text-[0.8rem] py-1 px-4 rounded-[6px] bg-gradient-to-r from-[rgba(255,255,255,0.31)] to-[rgba(255,255,255,0.1)] ">
          Edit Profile
        </button>
      </div>
      <div className="user-bio text-[#a1a1a1] mt-2">
        <span className="text-[1.4rem] font-bold mb-[28px] tracking-[4px]">About</span>
        <p className="text-[1.13rem] tracking-wide ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illo tenetur facilis sunt nemo debitis quisquam hic atque aut? Ducimus alias placeat optio accusamus repudiandae quis ab ex exercitationem rem?
        </p>
      </div>
      <div className="rooms-created my-[30px] text-[1.4rem] tracking-widest font-bold">
        Rooms created by <span className="text-yellow">Amore Tore</span>
      </div>
      <span className=" font-medium tracking-widest mb-[27px]">5 rooms available</span>

      <Feed/>
    </div>
  );
};

export default ProfileFeed;
