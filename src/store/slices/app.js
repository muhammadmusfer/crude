import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: 'light',
}

const slice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload
    },
  },
})

export default slice
