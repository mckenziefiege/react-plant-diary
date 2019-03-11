import React, { Component } from 'react'
import Task from './Task.js'

class ToDoList extends Component {

  getTasks = () => {
  if (this.props.tasks !== undefined) {
    return this.props.tasks.map(task => <Task taskObj={task} key={task.id} deleteTask={this.props.deleteTask}/>)
    }
  }

  render() {
    return (
      <div>
      To Do:
        {this.getTasks()}
      <form onSubmit={this.props.createNewTask}>
        <input type="text" name="content"/>
        <input type="submit" />
      </form>
      </div>
    )
  }
}

export default ToDoList;
