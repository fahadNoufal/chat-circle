import prof1 from '../../WebApp/WebApp-images/profiles/profile1.png'
import prof2 from '../../WebApp/WebApp-images/profiles/profile2.png'
import prof3 from '../../WebApp/WebApp-images/profiles/profile3.png'
import prof4 from '../../WebApp/WebApp-images/profiles/profile4.png'
import prof5 from '../../WebApp/WebApp-images/profiles/profile5.png'
import prof6 from '../../WebApp/WebApp-images/profiles/profile6.png'
import prof7 from '../../WebApp/WebApp-images/profiles/profile7.png'
import prof8 from '../../WebApp/WebApp-images/profiles/profile8.png'
import prof9 from '../../WebApp/WebApp-images/profiles/profile9.png'
import prof10 from '../../WebApp/WebApp-images/profiles/profile10.png'
import prof11 from '../../WebApp/WebApp-images/profiles/profile11.png'
import prof12 from '../../WebApp/WebApp-images/profiles/profile12.png'
import { createSlice } from '@reduxjs/toolkit'

const initialState={
    profiles:[prof1,prof2,prof3,prof4,prof5,prof6,prof7,prof8,prof9,prof10,prof11,prof12]
}
  
export const profileSlice= createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
})

export default profileSlice.reducer