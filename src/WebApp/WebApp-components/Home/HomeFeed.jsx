import React from 'react'
import Feed from '../common-components/Feed'
import ProfilePic from '../common-components/ProfilePic'
import profile1 from '../../WebApp-images/profiles/profile3.png'

const HomeFeed = () => {
  return (
    <div className=" py-10 h-[90vh]">
        <div className=" flex gap-[27px] mb-5">
            <div className="flex flex-col gap-2 flex-1">
                <div className="bg-black rounded-[20px] text-[1.38rem] gap-4 font-semibold flex items-center py-7 px-10">
                    Chat with our new <span className=' py-1 px-3 rounded-[12px] text-[#ffc953] bg-[#189cb9] '>Ai</span>
                </div>
                <div className="bg-black rounded-[20px]  font-semibold flex flex-col  py-5 px-10">
                    <div  className='text-[1.38rem] flex gap-2'>
                        <span className="text-[#ffc953]">32</span> rooms available
                    </div>
                    <div className=" flex justify-between gap-4  items-center">
                        <span className='text-[0.7rem] tracking-[3px] font-light'>Create your own room</span>
                        <button className='bg-[#189cb9] text-[0.85rem] py-1 rounded-[10px] px-3'>Create Room</button>
                    </div>
                </div>
            </div>
            <div className="flex-1 bg-black rounded-[20px] py-[20px] flex flex-col justify-center items-center ">
                <div className="w-[310px] flex flex-col gap-[10px]">
                    <div className="current-user-profile flex gap-4 items-center">
                        <ProfilePic profile={profile1} width='50' />
                        <span className='text-[1.6rem] text-[#71bbcb] font-semibold tracking-[2px]'>
                            Amore Tore
                        </span>
                    </div>
                    <div className="current-user-bio text-[0.75rem] text-[#b6b6b6]">
                        <p>
                            Just trying to learn new things in the way i could on the
                            best of the poert and gone.
                        </p>
                    </div>
                    <span className=' font-semibold'>Created <span className='text-[#f1b739]'>3</span> rooms</span>
                    <div className="logout-profille gap-[20px] text-[1rem] font-semibold  flex justify-between">
                        <button className='bg-yellow py-1 px-4 rounded-[10px] flex-1 text-black'>
                            Logout
                        </button>
                        <button className='flex-1 bg-[#71bbcb] p-1 rounded-[10px] text-center '>
                            Edit profile
                        </button>

                    </div>
                </div>
            </div>

        </div>
        <Feed/>        
    </div>
  )
}
export default HomeFeed