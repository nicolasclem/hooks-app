import React, { useMemo, useState } from 'react'
import { UseCounter } from '../../../Hooks/UseCounter'
import { procesoPesado } from '../../../Helpers/procesoPesado'


const MemoHook = () => {

    const {counter,increment}= UseCounter(1000)
  
    const [show,setShow]= useState(true)

    

    const memoProcesoPesado=useMemo(() =>procesoPesado(counter), [counter])
    return (
    <div className='my-5 mx-4'>
        
        <h1 className='display-3 my4 text-center'>MEMOHook</h1>
    
        <h2>Counter:<small>{ memoProcesoPesado }</small>  </h2>
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

export default MemoHook