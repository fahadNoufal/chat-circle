import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import "./index.css";
import Navbar from "./WebApp/WebApp-components/common-components/Navbar";
import Home from "./WebApp/WebApp-components/Home/Home";
import CreateRoom from "./WebApp/WebApp-components/create-room/CreateRoom";
import Room, { roomLoader } from "./WebApp/WebApp-components/Room/Room";
import "./WebApp/WebApp.css";
import Profile from "./WebApp/WebApp-components/Profile/Profile";
import Login from "./WebApp/WebApp-components/login/Login";
import { roomsLoader } from "./WebApp/WebApp-components/common-components/Feed";
import { userLoader } from "./WebApp/WebApp-components/Profile/ProfileFeed";
import { store } from "./store";
import { Provider } from "react-redux";
import Notification from "./WebApp/WebApp-components/common-components/Notification";
import Topics, {
  topicsLoader,
} from "./WebApp/WebApp-components/common-components/Topics";
import Activities, {
  activitiesLoader,
} from "./WebApp/WebApp-components/common-components/Activities";
import gsap from "gsap";
import { useEffect } from "react";
function App() {

  useEffect(()=>{
    const tl=gsap.timeline({paused:false})
    tl.to('.welcome-screen',{
      y:0,
      duration:1,
      ease:'power3.easeOut'
    })
    tl.to('.welcome-text-1',{
      y:0,
      duration:1,
      ease:'power3.easeInOut'
    })
    tl.to('.welcome-text-2',{
      y:0,
      duration:1,
      ease:'power3.easeInOut',
    })
    tl.to(['.welcome-text-1','.welcome-text-2'],{
      // y:0,
      opacity:0,
      duration:1,
      ease:'power3.easeInOut'
    })
    tl.to('.redirect',{
      yPercent:100,
      duration:1,
      ease:'power3.easeIn',
    })
  },[])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="chat-circle">
        <Route path="" element={<Navbar />}>
          <Route index element={<Home />} loader={roomsLoader} />
          <Route path="topics" element={<Topics />} loader={topicsLoader} />
          <Route
            path="activities"
            element={<Activities />}
            loader={activitiesLoader}
          />
          <Route path="create-room" element={<CreateRoom />} />
          <Route path="update-room">
            <Route path=":id" element={<CreateRoom edit={true} />} />
          </Route>
          <Route path="room">
            <Route path=":id" element={<Room />} loader={roomLoader} />
          </Route>
          <Route path="user">
            <Route path=":id" element={<Profile />} loader={userLoader} />
          </Route>
          <Route path="login" element={<Login />} />
        </Route>
      </Route>
    )
  );

  return (
    <Provider store={store}>
      <div className="redirect fixed z-20 top-0 left-0 right-0 bottom-0 justify-center items-center bg-black overflow-hidden" >
        <div className="welcome-screen flex justify-center h-full translate-y-[100%] flex-col items-center text-white translate-y[100%]">
          <div className="welcome-container overflow-hidden lg:text-[4.8rem]  text-[2.7rem] mt-[-8rem] font-bold lg:font-medium">
            <h1 className=" welcome-text-1 translate-y-[100%]">Helloo!👋</h1>
          </div>
          <div className="welcome-container overflow-hidden text-lg md:text-3xl md:mt-4 tracking-wide ">
            <h2 className=" welcome-text-2 translate-y-[100%]"><span className="opacity-90">Welcom to</span> <span className="gradient-text inline font-bold ">Chat Circle </span> </h2>
          </div>
        </div>
      </div>

      <div className="App ">
        <RouterProvider router={router} />
        <Notification />
      </div>
    </Provider>
  );
}

export default App;
