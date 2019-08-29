import React, { Component } from 'react'
import Task from './Task.js'

class ToDoList extends Component {
  render() {
    const {tasks, deleteTask, createNewTask} = this.props
    const allTasks = tasks !== undefined && tasks.map(task => <li><Task taskObj={task} key={task.id} deleteTask={deleteTask}/></li>)
    return (
      <div>
      <h3 className="heading-primary">My To Do's</h3>
        <ul>
          {allTasks}
        </ul>
        <form id="task-form" className="form" onSubmit={(e, el) => createNewTask(e, el)}>
          <div className="form__group">
            <label className="form__label">New Task</label>
            <input className="form__input" type="text" name="content"/>
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
