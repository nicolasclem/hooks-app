import React, { useRef } from 'react'

const FocusScreen = () => {


    const inputRef = useRef()

    const handleClick=()=>{
        inputRef.current.select()
    }
  return (
    <div>
        <h1 className='display-3 text-end my-4 mx-5'>FocusScreen</h1>

        <input 
            ref={inputRef}
            className='form-control w-50 mx-5'  
            placeholder='nombre'
        />    
        <button 
        className='btn btn-outline-success my-5 mx-5'
        onClick={handleClick}
        >
            FOCUS
        </button>
    </div>
  )
}

export default FocusScreen