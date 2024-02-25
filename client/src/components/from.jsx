import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

function Form({addTodo}){
    const [content, setContent] = useState("")
    
    const createNewTodo = async (e) => {
    e.preventDefault();
    if (content.length > 2) {
      const res = await fetch("/api/todos", {
        method: "POST",
        body: JSON.stringify({ todo: content }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      const newTodo = await res.json();
      setContent("")
      addTodo(newTodo)
    }
  }
    return(
        <form className="input" onSubmit={createNewTodo}>
              <input id='input' type="text" placeholder='Enter new Todo....'
                value={content} onChange={(e) => setContent(e.target.value)}
                required
              />
              <button type='submit'><IoMdAdd className='icon icon-img hover' /></button>
            </form>
    )
}

export default Form