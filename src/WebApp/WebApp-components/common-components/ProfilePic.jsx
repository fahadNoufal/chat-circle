import React from 'react'

const ProfilePic = ({profile,width}) => {
  return (
    <div className="activity-item-profile-container flex">
        <div style={{width:`${width}px`}} className={`profile-pic rounded-full aspect-square`} >
        <img src={profile} style={{width:`${width}px`}}  className=" rounded-full" alt="" />
        </div>
    </div>
  )
}

export default ProfilePic