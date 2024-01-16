import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Website from './website/Website';
import Navbar from './WebApp/WebApp-components/common-components/Navbar';
import Home from './WebApp/WebApp-components/Home/Home';
import CreateRoom from './WebApp/WebApp-components/create-room/CreateRoom';
import Room, { roomLoader } from './WebApp/WebApp-components/Room/Room';
import './website/website.css'
import './WebApp/WebApp.css'
import Profile from './WebApp/WebApp-components/Profile/Profile';
import Login from './WebApp/WebApp-components/login/Login';
import { roomsLoader } from './WebApp/WebApp-components/common-components/Feed';
import { userLoader } from './WebApp/WebApp-components/Profile/ProfileFeed';
import { store } from './store'
import { Provider } from 'react-redux'
import Notification from './WebApp/WebApp-components/common-components/Notification';
import Topics, { topicsLoader } from './WebApp/WebApp-components/common-components/Topics';
import Activities, { activitiesLoader } from './WebApp/WebApp-components/common-components/Activities';
function App() {

  
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='chat-circle'>
        <Route index element={<Website/>}/>
        <Route path='app' element={<Navbar/>}>
          <Route index element={<Home/>} loader={roomsLoader}/>
          <Route path='topics' element={<Topics/>} loader={topicsLoader} />
          <Route path='activities' element={<Activities/>} loader={activitiesLoader}/>
          <Route path='create-room' element={<CreateRoom/>}/>
          <Route path='update-room'>
            <Route path=':id' element={<CreateRoom edit={true}/>}/> 
          </Route>
          <Route path='room' >
            <Route path=':id' element={<Room/>} loader={roomLoader} />
          </Route>
          <Route path='user'>
            <Route path=':id' element={<Profile/>} loader={userLoader}/>
          </Route>
          <Route path='login' element={<Login/>}/>
        </Route>
      </Route>
    )
  )
  
  return (
    <Provider store={store}>  
      <div className="App ">      
        <RouterProvider router={router}/>
        <Notification/>
      </div>
    </Provider>
  );
}

export default App;
