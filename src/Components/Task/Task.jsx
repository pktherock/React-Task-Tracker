import React, { useState } from 'react';
import TaskStyle from './Task.module.css';
import { db } from '../../firebase';
import firebase from 'firebase/compat/app';

const Task = ({ updateTodo }) => {
  const [userInput, setUserInput] = useState({
    task: '',
    priority: 'low',
    start_time: '',
    end_time: '',
  });

  // setting user data for sending to the server
  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserInput({ ...userInput, [name]: value });
  };

  // Adding todo to the database
  const addTodo = (event) => {
    event.preventDefault();
    if (
      userInput.task &&
      userInput.priority &&
      userInput.start_time &&
      userInput.end_time
    ) {
      db.collection('todos').add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        todo: userInput,
      });
      setUserInput({
        task: '',
        priority: 'low',
        start_time: '',
        end_time: '',
      });
    } else {
      alert('Please Entered Everything Properly');
    }
  };

  return (
    <div className={TaskStyle.addTask}>
      <form>
        <div className={TaskStyle.firstLine}>
          <div>
            <label htmlFor="TaskName">Task Name: </label>
            <input
              type="text"
              name="task"
              value={userInput.task}
              onChange={getUserData}
              placeholder="Enter here something to-do"
              required
            />
          </div>
          <div>
            <label htmlFor="priority">Priority</label>
            <select
              id="priority"
              name="priority"
              value={userInput.priority}
              onChange={getUserData}
              required
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        <div className={TaskStyle.secondLine}>
          <div>
            <label htmlFor="startTime">StartDate & Time</label>
            <input
              type="datetime-local"
              id="startTime"
              name="start_time"
              value={userInput.start_time}
              onChange={getUserData}
              required
            />
          </div>
          <div>
            <label htmlFor="EndDate">EndDate & Time</label>
            <input
              type="datetime-local"
              id="EndDate"
              name="end_time"
              value={userInput.end_time}
              onChange={getUserData}
              required
            />
          </div>
        </div>
        <div className={TaskStyle.btn}>
          <button className={TaskStyle.todoBtn} onClick={addTodo} type="submit">
            Add Task
          </button>
        </div>
      </form>

      {/* FIXME */}
      {/* {todos.map((todo, index) => (
        <p key={index}>{todo.todo.start_time}</p>
      ))} */}
    </div>
  );
};

export default Task;
