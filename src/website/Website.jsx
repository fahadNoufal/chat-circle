import React from 'react'
import Navbar from './website-components/navbar/Navbar'
import './website.css'
import Features from './website-components/features/Features'
import GettingStarted from './website-components/getting-started/GettingStarted'
import JoinBanner from './website-components/joinBanner/JoinBanner'
import Contact from './website-components/contact-form/Contact'
import Explore from './website-components/explore-section/Explore'
import HomeScreen from './website-components/homeScreen/HomeScreen'
import RunningText from './website-components/running-text/RunningText'

const Website = () => {
  return (
    <div className='relative website'>
      <Navbar/>
      <HomeScreen/>
      <Features/>
      <Explore/>
      <RunningText/>
      <GettingStarted/>
      <JoinBanner/>
      <Contact/>
    </div>
  )
}

export default Website