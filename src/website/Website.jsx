import React from 'react'
import Navbar from './website-components/navbar/Navbar'
import HomeScreen from './website-components/homeScreen/HomeScreen'
import './website.css'
import Features from './website-components/features/Features'
import GettingStarted from './website-components/getting-started/GettingStarted'
import JoinBanner from './website-components/joinBanner/JoinBanner'
import Contact from './website-components/contact-form/Contact'
import Explore from './website-components/explore-section/Explore'
import HomeScreen1 from './website-components/homeScreen/HomeScreen1'

const Website = () => {
  return (
    <div className='relative'>
      <Navbar/>
      {/* <HomeScreen/> */}
      <HomeScreen1/>
      <Features/>
      <Explore/>
      <GettingStarted/>
      <JoinBanner/>
      <Contact/>
    </div>
  )
}

export default Website