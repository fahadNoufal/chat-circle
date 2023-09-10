import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser, setUser } from '../../../features/userDetails/userSlice';

import backIcon from '../../WebApp-images/arrow_back_icon.svg'
import char1 from '../../WebApp-images/others/animated-char-1.png'
import char2 from '../../WebApp-images/others/animated-char-2.png'
import { pushNotification } from '../../../features/pushNotification/pushNotificationSlice';

import wave from '../../WebApp-images/others/select-profile-wave.png'




const Login = () => {

  const dispatch=useDispatch()

  const user=useSelector((state)=>(state.user.user))
  const [formData,setFormData] =useState({username:'',email:'',password:'','confirm-password':'',name:'',avatar:null})

  const navigate=useNavigate()

  const [register,setRegisteer]=useState(false)
  
  let [loading,setLoading]=useState()



  // profile pics selection screen
  
  
  

  const [settingProfile,setSettingProfile]=useState(false)
  const profiles=useSelector(store=>(store.profile.profiles))


  const ProfilePic = ({index}) => {
      return (
          <div onClick={()=>{setFormData(prev=>({...prev,avatar:index}))}} className="activity-item-profile-container cursor-pointer hover:scale-110 overflow-hidden  transition-all flex">
              <div style={{borderRadius:'14px'}} className={`profile-pic md:w-[92px] w-[70px] rounded-full overflow-hidden aspect-square`} >
              <img src={profiles[index]}  className="md:w-[92px] w-[70px]" alt="" />
              </div>
          </div>
      )
  }
  const allProfiles= profiles.map((item,index)=>(<ProfilePic index={index} key={index} />))


  // End End End End End End End End End End End



  const handleLogin=async(e)=>{
    e.preventDefault()
    console.log({username:formData.username, password:formData.password})
    const response=await fetch('http://localhost:8000/api/token/',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username:formData.username.toLowerCase(), password:formData.password})

    })
    if (response.status!==200){
      dispatch(pushNotification('Something went wrong'))
      return console.log('error logging in')

    }

    const data =await response.json()
    // console.log(jwt_decode(data.access))

      if (data && data.hasOwnProperty('access')){
        dispatch(setUser(data))
        const fetchUser=async()=>{
          const response=await fetch('http://localhost:8000/api/current-user/',{
            method: 'GET',
            headers:{
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' +String(data.access),
            }
          })
          const cUser=await response.json()
          dispatch(setCurrentUser(cUser))
        }
        fetchUser()
        return navigate('/app')

      }
      else dispatch(setUser(null))
      dispatch(pushNotification('Invalid username or password'))
      setFormData({username:'',password:''})
      if (!register) dispatch(pushNotification(`Successfully logged in as ${formData.username}!`))
  }

  const handleRegister=async(e)=>{
    e.preventDefault()
    const response=await fetch('http://localhost:8000/api/register/',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    if (response.status!==200){
      return dispatch(pushNotification('User credentials are invalid!'))
    }
    
    const data =await response.json()

    // console.log(jwt_decode(data.access))
    if (data==='registered'){
      handleLogin(e)
      // dispatch(pushNotification(`Successfully registered as ${formData.username}!`)) 
    }
  } 

  const handleRegisterFormSubmit=(e)=>{

    e.preventDefault()

    if (!(formData.username&&formData.password&&formData['confirm-password']&&formData.email)){
      dispatch(pushNotification(`Please fill the form`))
    }
    else if(formData.password!==formData['confirm-password']){
      dispatch(pushNotification(`Passoword and confirm password does not match`))
    }
    else{
      e.preventDefault()
      setSettingProfile(true)
    }
    
  }

  const update_token= async()=>{
    console.log("Updating token...");
    const response=await fetch('http://localhost:8000/api/token/refresh/',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'refresh':user.refresh})
    })
    if (response.status!==200){
      console.log("something went wrong")
    }
    const data =await response.json()
    // console.log(jwt_decode(data.access))
    dispatch(setUser(data))

  }

  const handleInput=(e)=>{
    const {name,value} = e.target
    setFormData((prev)=>({...prev,[name]:value}))
  }

  useEffect(()=>{
    let interval=setInterval(() => {
      if (user){
        update_token()
      }
    },1000*60*4);
    return ()=>clearInterval(interval)
  },[user,loading])
  

  return(
    <div className="">
      {settingProfile?(
      <div className=' -mt-[70px] h-[100svh] w-full relative flex flex-col overflow-hidden justify-center items-center web-app'>
          <img src={wave} className=' absolute -z-10 top-20  left-0 right-0' alt="" />
          <div className="bg-black px-6 md:px-[66px] relative pt-[40px] mt-16 flex flex-col justify-center items-center max-w-[530px] rounded-[20px]  ">
              <span onClick={()=>{setSettingProfile(false)}} className='-mb-1 px-4 py-2 scale-125 rounded-lg bg-black top-2 absolute left-[-90px] hover:scale-150 transition-all '>
                <img src={backIcon} className='h-6  '  alt="" />
              </span>
              <div className="text-white tracking-[2px] flex items-center flex-col text-[1.2rem]">
                  <span className=''>Select your Avatar</span>
                  <div className='w-[100px] bg-white h-[1px]  mx-auto opacity-60 mt-1'></div>
              </div>
              
              
              <div className={"prof-img-container  justify-center mx-auto pt-14 pb-[65px] flex-wrap flex gap-[26px] md:gap-[50px]  "+ (formData.avatar?'blur-sm':'')}>
                  {allProfiles}
              </div>
          </div>
          {formData.avatar!==null&&(
              <div className="absolute top-[50%] left-[50%] shadow-2xl flex flex-col justify-center items-center border-2 border-white translate-x-[-50%] translate-y-[-50%] p-8 bg-black">
                  <span className='border-b mb-2 border-white'>
                      <ProfilePic index={formData.avatar}/>
                  </span>
                  <form onSubmit={handleRegister} className='w-full flex flex-col  gap-4  -mb-2'>
                      <input type="text" autoComplete='off' name='name' spellCheck='false' value={formData.name} onChange={handleInput} className=' rounded mt-2 w-full text-center px-4 placeholder:text-center py-2 bg-black border border-white' id='name' placeholder='Enter name...' />
                      <button type="submit" className=' px-4  py-[2px] w-full  bg-white text-black border border-white'>Submit</button>
                  </form>
                  <div onClick={()=>{setFormData((prev)=>({...prev,name:'',avatar:null}))}} className="rounded-full mt-[280px] cursor-pointer w-12 h-12 absolute bg-white text-black flex justify-center items-center text-2xl border border-black">
                      X
                  </div>
              </div>
          )}
      </div>
    ):(
      <div className='-mt-[70px] px-8 md:px-20 h-[100svh] w-full relative flex flex-col overflow-hidden justify-center items-center web-app'>
        <div className=" login-form-container max-w-[630px] rounded-[25px] mt-36  w-full  ">
          <div className=" bg-gradient-to-r rounded-t-[25px] to-[rgb(0,0,0)] py-4 px-10 text-[1.2rem] md:text-[1.5rem] text-[#818181] flex justify-between items-center tracking-[2px] font-semibold from-[rgba(27,27,27,0.87)] ">
            <span>
              {register?'Register':"Login"}
            </span>
            <button className='pl-4 -mb-2 pb-2 z-50 scale-75 md:scale-100 '><img src={backIcon} onClick={()=>{navigate(-1)}} className='w-4 mr-2' alt="" /></button>
          </div>
          <div className=" h-full py-8 px-10   ">
            <form id='create-room-form' onSubmit={(e)=>{register?handleRegisterFormSubmit(e):handleLogin(e)}}   className='flex md:text-[1.2rem]  flex-col gap-[12px] md:gap-[24px] overflow-y-scroll form-scrollbar  '>
              <div>
                <label htmlFor="username">
                  Username
                </label>
                <input type="text" spellCheck='false' name='username' value={formData.username} onChange={handleInput} className=' w-full rounded mt-2 ' id='username' placeholder='Enter username...' />
              </div>
              {register&&(
                <div>
                  <label htmlFor="name">
                    Email Id
                  </label>
                  <input type="text" spellCheck='false' name='email'  value={formData.email} onChange={handleInput} className=' w-full rounded mt-2 ' id='email' placeholder='Enter Your Email...' />
                </div>
              )}
              <div>
                <label htmlFor="password">
                  Password
                </label>
                <input type="password" spellCheck='false' name='password' autoComplete='off' value={formData.password}  onChange={handleInput} className=' w-full rounded mt-2 ' id='password' placeholder='Enter password...' />
              </div>
              {register&&(
                <div>
                  <label htmlFor="confirm-password">
                    Confirm Password
                  </label>
                  <input type="password" spellCheck='false' autoComplete='off' value={formData['confirm-password']} onChange={handleInput} className=' w-full rounded mt-2 ' name='confirm-password' id='confirm-password' placeholder='Enter password...' />
                </div>
              )}
              <button type="submit" className='bg-[#090711] tracking-[3px] font-semibold md:text-xl py-2 text-[#b7b4b4] outline-none px-6 rounded-md'>
                {register?'Register':"Login"}
              </button>
            </form>
          </div>
      </div>
        <div className='tracking-[2px] mt-10 mb-4 flex flex-col'>
              <div className="">
                {register?'Already hava an account?':'Do not have an account?'}
              </div>
              <button onClick={()=>{setRegisteer((prev)=>(!prev));setFormData({username:'',email:'',password:'','confirm-password':'',name:'',avatar:null})}} className='py-[2px] px-6 mt-3 rounded-sm bg-gradient-to-r from-[#2A0060] to-[#9A00A8] mx-auto ' type="submit">{register?'Login':'Register'}</button>
        </div>
        <img src={char1} alt="" className="absolute h-[550px] mr-[1000px] bottom-0  " />
        <img src={char2} alt="" className='absolute h-[480px] ml-[900px] top-[58px] ' />
    </div>
    )}
    </div>
  )
}

export default Login