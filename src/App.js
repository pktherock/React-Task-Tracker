import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Task from './Components/Task/Task';
import TaskList from './Components/TaskList/TaskList';
import { db } from './firebase';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  // lifting up todo state
  const getTodos = () => {
    db.collection('todos').onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
        }))
      );
    });
  };

  // FIXME lifting todo for update task
  const [updateTodoItem, setUpdateTodoItem] = useState({});

  useEffect(() => {
    updateTodo();
  }, []);

  const updateTodo = (todo) => {
    setUpdateTodoItem(todo);
  };

  console.log(updateTodoItem);

  return (
    <div>
      <Navbar />
      <Task updateTodo={updateTodoItem} />
      <TaskList todos={todos} updateTodo={updateTodo} />
    </div>
  );
};

export default App;
