import React from 'react'
import TodoHeader from 'views/todo/header/TodoHeader'
import { Provider } from 'react-redux'
import { store } from 'store/todo/store'

const Todo = () => (
  <Provider store={store}>
    <TodoHeader />
  </Provider>
)

export default Todo
