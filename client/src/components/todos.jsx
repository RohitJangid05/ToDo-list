import { MdDelete, MdEdit } from "react-icons/md";
import { useState, useEffect } from "react";

function Todo(props) {
    const { todo, setTodos, showChecked, date } = props
    const [strike, setStrike] = useState(false)
    useEffect(() => {
        const strikeState = localStorage.getItem(`todo-${todo._id}`);
        if (strikeState) {
            setStrike(JSON.parse(strikeState));
        }
    }, [todo._id]);

    const toggleStrike = () => {
        const newStrikeState = !strike;
        setStrike(newStrikeState);
        localStorage.setItem(`todo-${todo._id}`, JSON.stringify(newStrikeState));
    };

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
                <p className="hover">{date.toLocaleString()}</p>
            </ul>
            <div className="icons">
            <MdDelete className='md hover' onClick={() => {
                deleteTodo(todo._id)
            }} />
            </div>
        </div>
    )
}

export default Todo