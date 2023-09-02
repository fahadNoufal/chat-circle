import { configureStore } from '@reduxjs/toolkit'
import  userSliceReducer  from './features/userDetails/userSlice'
import pushNotificationReducer from './features/pushNotification/pushNotificationSlice'
import topicsReducer from './features/topics/topicsSlice'
import profileReducer from './features/profile/ProfileSlice'

export const store = configureStore({
  reducer: {
    user:userSliceReducer,
    notification:pushNotificationReducer,
    topic:topicsReducer,
    profile:profileReducer
  },
})