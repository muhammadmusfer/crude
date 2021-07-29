import { createSlice } from '@reduxjs/toolkit'
import { fetchTodo } from 'api-client/todos/thunk'

const initialState = {
  status='idle',
  error=null,
  todoList: [],
}

export const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addPendingTask: (state, action) => {
      state.todoList = [...state.todoList, action.payload]
    },

    addDoneTask: (state, action) => {
      const modifiedArr = state.todoList.filter(
        (todo) => todo.id !== action.payload.id
      )
      const todo = { ...action.payload, is_done: true }

      modifiedArr.push(todo)
      state.todoList = modifiedArr
    },

    deleteTask: (state, action) => {
      state.todoList = state.todoList.filter(
        (item) => item.id !== action.payload.id
      )
    },
    extraReducers:{
      [fetchTodo.pending]:(state)=>{
        state.staus = 'loading'
      },
      [fetchTodo.fulfilled]:(state,action)=>{
          state.status = 'succeeded'
          state.todoList = [...state.todoList, action.payload]
      },
      [fetchTodo.rejected]:(state,action)=>{
          state.status='failed'
          state.error = action.error.message
      }
    },
  },
})

export const { addPendingTask, addDoneTask, deleteTask } = TodoSlice.actions

export default TodoSlice.reducer
