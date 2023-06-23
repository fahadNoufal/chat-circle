import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Website from './website/Website';
import Navbar from './WebApp/WebApp-components/common-components/Navbar';
import Home from './WebApp/WebApp-components/Home/Home';
import CreateRoom from './WebApp/WebApp-components/create-room/CreateRoom';
import Room from './WebApp/WebApp-components/Room/Room';
import './website/website.css'
import './WebApp/WebApp.css'
import Profile from './WebApp/WebApp-components/Profile/Profile';
import Login from './WebApp/WebApp-components/login/Login';
function App() {

  
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'>
        <Route index element={<Website/>}/>
        <Route path='app' element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path='create-room' element={<CreateRoom/>}/>
          <Route path='room' element={<Room/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='login' element={<Login/>}/>
        </Route>
      </Route>
    )
  )
  
  return (
    <div className="App">      
       <RouterProvider router={router}/>
    </div>
  );
}

export default App;
