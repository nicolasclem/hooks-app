import React, { useState } from 'react'
import { UseCounter } from '../../../Hooks/UseCounter'
import Small from './Small'


const Memorize = () => {

    const {counter,increment}= UseCounter(10)
  
    const [show,setShow]= useState(true)


    return (
    <div className='my-5 mx-4'>
        
        <h1 className='display-3 my4 text-center'>MEMORIZE</h1>
    
        <h1>Counter: <Small value={counter} /></h1>
    <button className='btn btn-primary'onClick={increment}>+1</button>
    
    <button 
    className='btn  btn-outline-secondary mx-3'
    onClick={()=> setShow(!show)}
    
    >
        show/hide {JSON.stringify(show)}
    </button>
    </div>
  )
}

export default Memorize