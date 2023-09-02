import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:null,
    currentUser:null,
  }
  
  export const userSlice= createSlice({
    name: 'user',
    initialState,
    reducers: {
      setUser: (state,{payload}) => {
        state.user=payload
      },
      removeUser: (state) => {
        state.user=null
        state.currentUser=null
      },
      setCurrentUser: (state,{payload}) => {
        state.currentUser=payload
      }
    }
  })
  
  export const {setUser,removeUser,setCurrentUser} = userSlice.actions 
  export default userSlice.reducer