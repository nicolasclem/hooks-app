import React, { useState } from 'react'
import MultipleCustomHooks from '../MulipleCustomHooks/MultipleCustomHooks'

const RealUseRef = () => {
  const [show , setShow]=useState(false)
  return (
    <div className='my-4'>
        <h1 className='display-1 text-center my-4'>REAL USE REF</h1>
        <hr/>
    {show&&<MultipleCustomHooks />}

    <button className='bt btn-outline-primary my-3' onClick={()=>{
      setShow(!show)
    }}> Mostrar/OCultar</button>
    </div>
  )
}

export default RealUseRef