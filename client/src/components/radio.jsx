import { useState } from "react"

function Radio({showChecked, toggleShowChecked}) {
    const [show, setShow] = useState(false)

    const toggleShow = () => {
        setShow(!show)
    }
    return (
        <div className="radio">
            <label htmlFor="checkbox" id='check' className='radio hover' onClick={toggleShowChecked}><input type="checkbox" checked={showChecked} className=' checkbox hover' />Hide Checked</label>
        </div>
    )
}

export default Radio