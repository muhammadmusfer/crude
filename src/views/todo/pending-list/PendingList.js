import React from 'react'
import { useSelector } from 'react-redux'

function PendingList() {
  const pendinglist = useSelector((state) => state.todo.pendingList)
  const list = pendinglist.map((item) => <li key={item.id}>{item.text}</li>)
  return <ul>{list}</ul>
}
export default PendingList
