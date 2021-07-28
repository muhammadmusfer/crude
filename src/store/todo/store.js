import { configureStore } from '@reduxjs/toolkit'
import todoReducer from 'store/todo/TodoSlice'

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
})
