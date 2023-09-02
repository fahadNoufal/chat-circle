import React from 'react'
import ProfileFeed from './ProfileFeed'
import LeftBar from '../common-components/LeftBar/LeftBar'
import RightBar from '../common-components/RightBar/RightBar'

const Profile = () => {
  return (
    <div className=' flex justify-between xl:gap-10 web-app '>
        <LeftBar/>
        <ProfileFeed/>
        <RightBar/>
    </div>
  )
}

export default Profile