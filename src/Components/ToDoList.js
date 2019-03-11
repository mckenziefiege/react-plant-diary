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
      <h3 className="heading-tertiary">To Do</h3>
        {this.getTasks()}
        <form className="form" onSubmit={this.props.createNewTask}>
          <div className="form__group">
            <input className="form__input"type="text" name="content"/>
            <label className="form__label">Content</label>
          </div>
          <div className="form__group">
            <input className="btn"type="submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default ToDoList;
