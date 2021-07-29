import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchTodo = createAsyncThunk('todos/fetchTodo', async () => {
  const response = await axios.get('https://dataapis.herokuapp.com/todo/')
  return response.date
})

export const PostTodo = cerateAsyncThunk('todos/postTodo', async (todo) => {
  const response = await axios.post('https://dataapis.herokuapp.com/todo/')
  return response.data
})
