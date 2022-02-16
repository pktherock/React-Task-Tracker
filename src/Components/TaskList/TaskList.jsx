import React from 'react';
import TaskListItem from '../TaskListItem/TaskListItem';
import taskStyle from './TaskList.module.css';

// FIXME for updating task
const TaskList = ({ todos, updateTodo }) => {
  const updateTask = (todo) => {
    updateTodo(todo);
  };

  return (
    <div className={taskStyle.taskTable}>
      <div className={taskStyle.search}>
        <div>
          <button className={taskStyle.button}>Previous</button>
          <button className={taskStyle.button}>Next</button>
        </div>
        <input
          className={taskStyle.input}
          type="text"
          placeholder="Search todo"
        />
      </div>
      <div>
        <table className={taskStyle.todosTable} border="1">
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Task Name</th>
              <th>StartDate&Time</th>
              <th>EndDate&Time</th>
              <th>Priority</th>
              <th>Status</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.slice(0, 10).map((todo, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <TaskListItem
                  todo={todo}
                  id={todo.id}
                  updateTodo={updateTask}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;
