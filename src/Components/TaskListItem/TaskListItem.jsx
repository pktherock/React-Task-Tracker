import React from 'react';
import { db } from '../../firebase';
import './TaskListItem.css';
const TodoListItem = ({ todo, id, updateTodo }) => {
  // BUG editing todo function
  const editTodoHandler = () => {
    updateTodo(todo, id);
  };

  // DELETING task form database
  const deleteTodoHandler = (e) => {
    const isYes = window.confirm('Are you sure want to delete task');
    if (isYes) {
      db.collection('todos').doc(id).delete();
    }
  };

  return (
    <>
      <td>{todo.todo.task}</td>
      <td>{todo.todo.start_time}</td>
      <td>{todo.todo.end_time}</td>
      <td>{todo.todo.priority}</td>
      <td>No started</td>
      <td className="actionBtn">
        <button onClick={editTodoHandler} className="action">
          Edit
        </button>
        <button onClick={deleteTodoHandler} className="action">
          Delete
        </button>
      </td>
    </>
  );
};

export default TodoListItem;
