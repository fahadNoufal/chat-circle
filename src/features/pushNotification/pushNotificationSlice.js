import { createSlice } from "@reduxjs/toolkit";

export const pushNotificationSlice =createSlice({
    name:"pushNotification",
    initialState:{pushNotification:null},
    reducers:{
        pushNotification:(state,{payload})=>{
            state.pushNotification=payload
        },
        removeNotification:(state)=>{
            state.pushNotification=null
        },
    }
})

export const {pushNotification,removeNotification}=pushNotificationSlice.actions
export default pushNotificationSlice.reducer