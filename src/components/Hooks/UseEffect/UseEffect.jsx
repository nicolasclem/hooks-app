import React, { useEffect, useState } from 'react'
import Message from './Message'

const UseEffect = () => {

    const  [ formState, setFromState]=useState({
        name:'',
        email:''
      
    })

    const {name,email}=formState

  


    useEffect(()=>{

        //console.log("hola!! carga incial");
    },[])

    useEffect(()=>{

        //console.log("Cambios den el form");
    },[formState])

    useEffect(()=>{

        //console.log("!!!!!Cambios den el name del form");
    },[name])


    useEffect(()=>{

        //console.log("Cambios en el email !!'!!! el form");
    },[email])


    const handleInputChange = ({target})=>{
       
        setFromState({
            ...formState,
            [target.name]:target.value
        })
    }
  return (
    <div className='my-4 text-center'>
        <hr/>
        <hr/>
        <h1 className='my-4'>USE EFFECT  ---  Simple-FORM</h1>
        <div className='form-group  mx-5'>
            <input
                type="text"
                name='name'
                onChange={ handleInputChange}
                placeholder='nombre'
                className='form-control'
                autoComplete='off'
                value={name}
            />

            <input
                type="email"
                name='email'
                onChange={handleInputChange}
                placeholder='email'
                className='form-control'
                autoComplete='off'
                value={email}
            />



        </div>

        {name === "nico"&&<Message />}


        <p>Coordenadas MOUSE m||m</p>
    </div>
  )
}

export default UseEffect