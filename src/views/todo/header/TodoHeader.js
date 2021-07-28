import React, { useState } from 'react'
import useStyle from 'views/todo/header/HeaderStyle'
import AddIcon from '@material-ui/icons/Add'
import TextField from '@material-ui/core/TextField'
import { useSelector, useDispatch } from 'react-redux'
import { addPendingList } from 'store/todo/TodoSlice'
import TodoList from 'views/todo/todo-list/TodoList'

function TodoHeader() {
  const pendinglist = useSelector((state) => state.todo.pendingList)

  const dispatch = useDispatch()
  const classes = useStyle()
  const [input, setInput] = useState('')

  const inputObj = {
    text: input,
    id: Math.random(),
    isPending: false,
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
        />
        <button
          className={classes.addButton}
          onClick={() => dispatch(addPendingList(inputObj))}
        >
          <AddIcon />
        </button>

        {console.log(pendinglist)}
      </div>
      <TodoList />
    </div>
  )
}
export default TodoHeader
