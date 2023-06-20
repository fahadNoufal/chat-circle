import React from 'react'
import './WebApp.css'
import Home from './WebApp-components/Home/Home'
import Navbar from './WebApp-components/common-components/Navbar'
import Profile from './WebApp-components/Profile/Profile'
import Room from './WebApp-components/Room/Room'
import CreateRoom from './WebApp-components/create-room/CreateRoom'
import Login from './WebApp-components/login/Login'

const WebApp = () => {
  return (
    <div className='web-app'>
        <Navbar/>
        {/* <Home/> */}
        {/* <Profile/> */}
        {/* <Room/> */}
        {/* <CreateRoom/> */}
        <Login/>
        
    </div>
  )
}

export default WebApp