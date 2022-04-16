import React, { useLayoutEffect, useRef, useState } from 'react'
import { UseCounter } from '../../../Hooks/UseCounter'
import { UseFetch } from '../../../Hooks/UseFetch'
import './layoute.css'

const LayoutEffect = () => {

  const  {counter,increment , decrement}=UseCounter(1)

  const { data}=UseFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

  const {quote}= !!data &&data[0]

    const pTag = useRef()

    const [boxSize, setBoxSize] = useState({})
  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  
    
  }, [quote])


  return (
    <div className='p-5 mx-4'>
        <h1 className='display-3 mb-5 text-center'>
        LayoutEffect 
         </h1>

        <blockquote className='blockquote text-end'>
            <p className='mb-4'
                ref={pTag}
            >{quote} </p>
           
        </blockquote>
        
        <pre>
            {JSON.stringify(boxSize,null,4)}
        </pre>
        <button className='btn btn-secondary' onClick={increment}>Siguiente  Quote</button>  
        <button className='btn btn-secondary mx-3' onClick={()=>counter>=2&&decrement()}>Anterior  Quote</button>        
    </div>
  ) 
}

export default LayoutEffect