import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    topic:'',
  }
  
  export const topicSlice= createSlice({
    name: 'topic',
    initialState,
    reducers: {
      setTopic: (state,{payload}) => {
        state.topic=payload
      },
    }
  })
  
  export const {setTopic} = topicSlice.actions 
  export default topicSlice.reducer