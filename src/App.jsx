import react, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";
import './App.css'

function App() {

  const [strike, setStrike] = useState(false)
  const [show, setShow]=useState(false)

  const toggleStrike = () => {
    setStrike(!strike)
  }

  const toggleShow=()=>{
    setShow(!show)
  }

  return (
    <>
      <div id="main-container">
        <h1>TODO LIST</h1>
        <div className="todos-container">
        <div className="sub-input">
          <div className="input">
            <input id='input' type="text" placeholder='Enter your Todo' />
            <IoMdAdd className='icon hover' />
          </div>
          <div className="radio">
            <label htmlFor="checkbox" id='check' className='hover'  onClick={toggleShow}><input type="checkbox" />Hide Checked</label>
          </div>
          </div>
          <div className="todos">
            <div className="card" style={{ display: strike && show && 'none'}}>
              <ul className="todo">
                <li className='hover' style={{ textDecoration: strike ? 'line-through' : 'none'}}
                  onClick={toggleStrike} >Buy Bread</li>
              </ul>
              <MdEdit className='icons hover' />
              <MdDelete className='icons hover' />
            </div>
            <div className="card" style={{ display: strike && show && 'none'}}>
              <ul className="todo">
                <li className='hover' style={{ textDecoration: strike ? 'line-through' : 'none'}}
                  onClick={toggleStrike} >Buy Milk</li>
              </ul>
              <MdEdit className='icons hover' />
              <MdDelete className='icons hover' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
