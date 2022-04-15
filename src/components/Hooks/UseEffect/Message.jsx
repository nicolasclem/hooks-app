import React, { useEffect, useState } from 'react'

const Message = () => {


    const [coord ,setCoord]=useState({x:0,y:0})

    const {x,y}= coord

    useEffect(() => {
       
        const mouseMove = (e)=>{

            const coord= {
                x:e.x,
                y:e.y
            }

            setCoord(coord);
        }
        window.addEventListener('mousemove',mouseMove)
        
        
        return () => {
            window.removeEventListener('mousemove',mouseMove)
        
      }
    })
    
  return (
    <div className='display-4 my-5'>
        <h3>Aprendiendo USEFFECT  ----clear</h3>
        <p>x:{x}</p>
        <p>y:{y}</p>
    </div>
  )
}

export default Message