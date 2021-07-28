import React from 'react'
import PendingList from 'views/todo/pending-list/PendingList'

const TodoList = () => (
  <div id="listItemDiv">
    <div id="inCompletTask">
      <PendingList />
    </div>
    <div className="hr">
      <hr></hr>
    </div>
  </div>
)
export default TodoList
