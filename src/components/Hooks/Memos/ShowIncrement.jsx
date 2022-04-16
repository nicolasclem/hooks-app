import React from 'react'

const ShowIncrement = React.memo(({increment}) => {

    console.log("me volvi a generar");
  return (
    <div>

        <button className='btn btn-outline-info'
         onClick={()=>increment(5)}>
             Incrementar
             </button>
    </div>
  )
})

export default ShowIncrement