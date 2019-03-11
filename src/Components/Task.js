import React, { Component } from 'react'

class Task extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.taskObj.content}
        <button onClick={() => this.props.deleteTask(this.props.taskObj.id)}>X</button>
      </div>
    )
  }
}

export default Task;
