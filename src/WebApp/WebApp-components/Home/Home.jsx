import React from 'react'
import LeftBar from '../common-components/LeftBar/LeftBar'
import RightBar from '../common-components/RightBar/RightBar'
import HomeFeed from './HomeFeed'

const Home = () => {

  return (
    <div className='app-home relative flex justify-between gap-4 web-app  '>
        <LeftBar/>
        <HomeFeed/>        
        <RightBar/>
    </div>
  )
}

export default Home