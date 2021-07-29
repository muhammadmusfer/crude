import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useStyle from 'views/todo/todo-list/TodoListStyle'
import { addDoneTask, deleteTask } from 'store/todo/TodoSlice'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import DeleteIcon from '@material-ui/icons/Delete'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

function TodoList() {
  const dispatch = useDispatch()
  const classes = useStyle()
  const taskList = useSelector((state) => state.todo.todoList)

  const donelist = taskList
    .filter((task) => task.is_done)
    .map((item) => (
      <li className={classes.listItem} key={item.id}>
        {item.todo_data}
        <CheckCircleIcon className={classes.cmpleteIcon} />
        <DeleteIcon
          className={classes.delIcon}
          onClick={() => dispatch(deleteTask(item))}
        />
      </li>
    ))

  const pendinglist = taskList
    .filter((todo) => !todo.is_done)
    .map((item) => (
      <li className={classes.listItem} key={item.id}>
        {item.todo_data}
        <CheckCircleOutlineIcon
          className={classes.cmpleteIcon}
          onClick={() => dispatch(addDoneTask(item))}
        />
        <DeleteIcon
          className={classes.delIcon}
          onClick={() => dispatch(deleteTask(item))}
        />
      </li>
    ))

  return (
    <ul className={classes.tasklist}>
      <div className={classes.inCompleteTask}>{pendinglist}</div>
      <div className={classes.CompleteTask}>{donelist}</div>
    </ul>
  )
}
export default TodoList
