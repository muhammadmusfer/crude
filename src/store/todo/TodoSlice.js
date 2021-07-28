import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pendingList: [],
  doneList: [],
}

export const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addPendingList: (state, action) => {
      console.log(action.payload)
      state.pendingList = [...state.pendingList, action.payload]
    },
    addDoneList: (state, action) => {
      state.doneList = [...state.doneList, action.payload]
    },
  },
})

export const { addPendingList, addDoneList } = TodoSlice.actions

export default TodoSlice.reducer
