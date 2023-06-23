import React from 'react'
import ProfilePic from './ProfilePic'
import membersIcon from '../../WebApp-images/joinedPeople.svg'
import { Link } from 'react-router-dom'

const Post = ({profile,username,timeSince,roomName,roomDescription,membersNo,topic}) => {
  return (
    <div className=' flex gap-4 p-[30px] max-w-[940px] rounded-[21px] bg-[#1e1e1e] pr-[60px]'>
        <div className="post-prof -ml-2 cursor-pointer">
            <Link to='profile'>
                <ProfilePic profile={profile} width='60'/>
            </Link>
        </div>
        <div className="post-details flex flex-col gap-[10px]">
            <div className="post-author flex  justify-between items-center mt-[15px]">
                <Link to='profile'>
                    <span className=' text-[1.1rem] tracking-[2px] font-semibold  cursor-pointer'>{username}</span>
                </Link>
                <span className=' text-[12px] text-[#c0c0c0] cursor-default '>{timeSince} ago</span>
            </div>
            <Link to='/app/room'>
                <div className="about-post flex flex-col gap-[10px] ">
                    <h2 className=' text-[1.5rem] tracking-[2px] text-[#71bbcb] font-semibold  '>{roomName}</h2>
                    <p className=' font-normal tracking-[2px] text-[0.9rem]  '>
                        {roomDescription}
                    </p>
                </div>
            </Link>
            <div className="members-section flex justify-between items-center mt-3">
                <div className="member-number flex gap-3 ">
                    <img src={membersIcon} className='text-yellow w-[21px] aspect-square' alt="" />
                    <span className=' text-[15px] tracking-[2px] font-semibold  cursor-default'>
                        <span className='text-yellow '>{membersNo}</span> members
                    </span>
                </div>
                <div className="topic cursor-pointer bg-yellow py-[6px] px-[14px] rounded-full font-medium text-[15px] text-black">
                    {topic}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post