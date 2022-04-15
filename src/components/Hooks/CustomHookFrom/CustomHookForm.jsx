import React, { useEffect } from 'react'
import { UseFrom } from '../../../Hooks/UseForm'

const CustomHookForm = () => {

    const  [ formValue, handleInputChange]=UseFrom({
        name:'',
        email:'',
        password:''
    })
    const {name,email,password}=formValue
    
    useEffect(() => {

        console.log("porbando un useEffect  cada vez q se modifica el email");
    
      
    }, [email])
    


    const handleSubmit=(e)=>{
        e.preventDefault()

        console.log(formValue);
    }

  return (
    <div className='mb-5 text-center'>
        <hr/>
        <hr/>
        <h1 className='my-4'>USE EFFECT  --- CUSTOM HOOK-FORM</h1>
        <form className='form-group  mx-5'  onSubmit={handleSubmit}>
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
              <input
                type="password"
                name='password'
                onChange={handleInputChange}
                placeholder='password'
                className='form-control'
                autoComplete='off'
                value={password}
            />

            <button className='btn btn-dark my-5 p-1'type='submit'>Enviar</button>

        </form>
    </div>

  
  )



}

export default CustomHookForm