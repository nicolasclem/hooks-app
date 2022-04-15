import React from 'react'
import { UseCounter } from '../../../Hooks/UseCounter'
import { UseFetch } from '../../../Hooks/UseFetch'

const MultipleCustomHooks = () => {

  const  {counter,increment , decrement}=UseCounter(1)

  const {loading, data}=UseFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

  const {author,quote}= !!data &&data[0]


  return (
    <div className='p-5 mx-4'>
        <h1 className='display-3 mb-5 text-center'>
           BreakingBad Quotes
         </h1>

         {loading?<div className='alert alert-info text-center'>
                    loading...
                </div>:
        <blockquote className='blockquote text-end'>
            <p className='mb-4'>{quote} </p>
            <footer className='blockquote-footer my-4'>{author}</footer>
        </blockquote>
        }  

        <button className='btn btn-secondary' onClick={increment}>Siguiente  Quote</button>  
        <button className='btn btn-secondary mx-3' onClick={()=>counter>=2&&decrement()}>Anterior  Quote</button>        
    </div>
  ) 
}

export default MultipleCustomHooks