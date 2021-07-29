import React, { useState } from 'react'
import useStyle from 'views/todo/header/HeaderStyle'
import AddIcon from '@material-ui/icons/Add'
import TextField from '@material-ui/core/TextField'
import { useDispatch } from 'react-redux'
import { addPendingTask } from 'store/todo/TodoSlice'
import TodoList from 'views/todo/todo-list/TodoList'

function TodoHeader() {
  const dispatch = useDispatch()
  const classes = useStyle()
  const [input, setInput] = useState('')

  const inputObj = {
    todo_data: input,
    id: Math.floor(Math.random() * 1000),
    is_done: false,
  }

  function add() {
    if (input === '') alert('Please Enter String')
    else {
      dispatch(addPendingTask(inputObj))
      setInput('')
    }
  }

  const handleOnChange = (e) => setInput(e.target.value)
  return (
    <div className={classes.main}>
      <div className={classes.headerDiv}>
        <TextField
          id="outlined-basic"
          type="text"
          variant="outlined"
          className={classes.inputField}
          placeholder="Enter an activity..."
          onChange={handleOnChange}
          value={input}
        />
        <button className={classes.addButton} onClick={() => add()}>
          <AddIcon />
        </button>
      </div>
      <TodoList />
    </div>
  )
}
export default TodoHeader
