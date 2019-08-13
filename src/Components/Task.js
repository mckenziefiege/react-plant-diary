import React, { Component } from "react"

class Task extends Component {

  render() {
    return (
      <div>
        <p className="task">{this.props.taskObj.content} </p>
        <button className="btn" onClick={() => this.props.deleteTask(this.props.taskObj.id)}>X</button>
      </div>
    )
  }
}

export default Task;
