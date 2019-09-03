import React, { Component } from "react"
import GarbageIcon from './GarbageIcon.js'

class Task extends Component {

  render() {
    const {taskObj, deleteTask} = this.props
    return (
      <div className="task">
        <p className="task-name">{taskObj.content} </p>
        <GarbageIcon deleteItem={deleteTask} id={taskObj.id}/>
      </div>
    )
  }
}

export default Task;
