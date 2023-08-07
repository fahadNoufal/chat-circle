import React from 'react'
import Feed from '../common-components/Feed'
import ProfilePic from '../common-components/ProfilePic'
import profile1 from '../../WebApp-images/profiles/profile3.png'
import { Link } from 'react-router-dom'
import add from '../../WebApp-images/add.svg'
const HomeFeed = () => {
  return (
    <div className=" py-10 h-[90vh]">
        <div className=" flex gap-[27px] mb-5">
            <div className="flex justify-center  gap-8 flex-1 bg-black px-10 items-center rounded-[20px]  ">
                
                <div className="font-semibold flex flex-col -mt-1 ">
                    <div  className='text-[1.38rem] flex gap-2'>
                        <span className="text-[#ffc953]">32</span> rooms available
                    </div>
                    <div className=" flex justify-between gap-4  items-center">
                        <span className='text-[0.7rem] tracking-[3px] font-light'>Create your own room</span>
                    </div>
                </div>
                <Link to='/app/create-room'><button className='bg-[#189cb9] flex py-3  rounded-[10px] text-5xl px-3 '>
                    <div className='flex justify-center min-w-[40px] items-center'><img src={add} className='scale-150' alt="" /></div>    
                </button></Link>
            </div>
            <div className="flex-1 bg-black rounded-[20px] py-[20px] flex flex-col justify-center items-center ">
                <div className="w-[310px] flex flex-col gap-[10px]">
                    <div className="current-user-profile flex gap-4 items-center">
                        <ProfilePic profile={profile1} width='50' />
                        <span className='text-[1.5rem] font-medium  tracking-[2px]'>
                            Amore Tore
                        </span>
                    </div>
                    
                </div>
            </div>

        </div>
        <Feed/>        
    </div>
  )
}
export default HomeFeed