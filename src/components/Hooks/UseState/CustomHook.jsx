import React from 'react'
import { UseCounter } from '../../../Hooks/UseCounter'

const CustomHook = () => {
    const  {counter,increment , decrement,reset }=UseCounter(100);
  return (
    <div className='my-5'>
    <h2>Counter   ... custom HOOK :{counter} </h2>

    <button className='btn btn-info  ' onClick={()=>increment()}>+1</button >
    <button className='btn btn-info  mx-2' onClick={()=>decrement()}>-1</button >
    <button className='btn btn-info'onClick={reset}>reset</button>
    </div>
  )
}

export default CustomHook