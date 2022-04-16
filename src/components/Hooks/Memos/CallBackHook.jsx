import React, { useCallback, useEffect, useState } from 'react'
import ShowIncrement from './ShowIncrement'

const CallBackHook = () => {

        const [count,setCount]=useState(20)
        // const increment= ()=>{
        //     setCount(count+1)
        // }

    const increment =useCallback(
       (num) => {
        setCount(x=>x+num)
       },
       [setCount]
     )


     useEffect(()=>{

        ///?????????

     },[increment])
        
  return (
    <div className='m-4'>
        
        <h1 className='display-2'> CallBackHook</h1>

        <h3>Contador : {count}</h3>

        <ShowIncrement increment={increment}/>
        
    </div>
  )
}

export default CallBackHook