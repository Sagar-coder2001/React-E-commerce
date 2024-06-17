import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    value: 'white',
    navbar : '#a9f0da',
    textcolor : 'black'
  }

  export const changetheme = createSlice({
    name : 'changetheme',

    initialState,
    
    reducers : {
        white : (state ) => {
            state.value = 'white'
            state.navbar = '#a9f0da'
            state.textcolor = 'black'
        },
        dark : (state) => {
            state.value = '#0E1027'
            state.navbar = 'black'
            state.textcolor = 'white'
        }
    }
  })

  export const {white , dark} =  changetheme.actions
  export default changetheme.reducer