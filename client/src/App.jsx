import react, { useState, useEffect } from 'react'
import Todo from './components/todos';
import Radio from './components/radio';
import Form from './components/from';

import './App.css'

function App() {
  const [showChecked, setShowChecked] = useState(false);
  const toggleShowChecked = () => {
    setShowChecked(!showChecked);
  };
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      const res = await fetch('/api/todos');
      const todos = await res.json();

      setTodos(todos)
    }
    getTodos();
  }, []);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  return (
    <>
      <main>
        <div className="title">
          <h1>ToDo Task</h1>
        </div>
        <div className="todos-container">
          <div className="inputs">
            <Form addTodo={addTodo} />
            <Radio showChecked={showChecked} toggleShowChecked={toggleShowChecked} />
          </div>
          <div className="todos">
            {(todos.length > 0) && todos.map((todo) => (
              <Todo
                key={todo._id}
                todo={todo}
                showChecked={showChecked}
                date={new Date(todo.createdAt)}
                setTodos={setTodos}
              />
            ))}
          </div>
        </div>
      </main>

    </>
  )
}

export default App
