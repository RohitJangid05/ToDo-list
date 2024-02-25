import { MdDelete, MdEdit } from "react-icons/md";
import { useState } from "react";

function Todo(props) {
    const { todo, setTodos, showChecked } = props
    const [strike, setStrike] = useState(false)

    const toggleStrike = () => {
        setStrike(!strike)
    }

    const deleteTodo = async (todoId) => {
        const res = await fetch(`/api/todos/${todoId}`, {
            method: "DELETE"
        });
        const json = await res.json();
        if (json.acknowledged) {
            setTodos(currentTodos => {
                return currentTodos
                    .filter((currentTodo) => (currentTodo._id !== todoId))
            })
        }
    }
    const visibleTodo = showChecked ? todo.completed : !todo.completed;

    return (
        <div className="card" style={{ display: strike && showChecked && 'none' }} >
            <ul className="todo">
                <li className='hover' style={{ textDecoration: strike ? 'line-through' : 'none'}}  onClick={toggleStrike}  >{todo.todo}</li>
            </ul>
            <MdEdit className='icons hover' />
            <MdDelete className='icons hover' onClick={() => {
                deleteTodo(todo._id)
            }} />
        </div>
    )
}

export default Todo