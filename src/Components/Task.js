import React, { Component } from "react"

class Task extends Component {

  render() {
    const {taskObj, deleteTask} = this.props
    return (
      <div className="task">
        <p className="task-name">{taskObj.content} </p>
        <button className="btn" onClick={() => deleteTask(taskObj.id)}>X</button>
      </div>
    )
  }
}

export default Task;
