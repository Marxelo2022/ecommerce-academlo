import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import './style/inputSearch.css'

const InputSearch = () => {

  const {handleSubmit, register, reset} = useForm()

  const submit = data => {
    console.log(data)
  }



  return (
    <form onSubmit={handleSubmit(submit)} className='form-home'>
      <input 
        placeholder='  What are you looking for?' 
        className='form_input'
        type="text" {...register('searchText')}
         />
      <button className='form_button'><i class="fa-solid fa-magnifying-glass form_icon"></i></button>
    </form>
  )
}

export default InputSearch