import React, { useState } from 'react'

const CounterAPP = () => {

    const [state ,setCount]= useState({
        count1:10,
        count2:20,
        count3:30,
        count4:40,

    })

    const {count1, count2,count3,count4}=state

    
  return (
    <div className='mx-4'>
    <h1>Counter : </h1>

    <h2>{count1}</h2>
    <h2>{count2}</h2>
    <h2>{count3}</h2>
    <h2>{count4}</h2>

    <hr />

    <button className='btn btn-primary' 
    onClick={()=>
        {setCount({...state,
        count1:count1+1})}}>+1</button>
    
    
    <hr />
    </div>
  )
}

export default CounterAPP