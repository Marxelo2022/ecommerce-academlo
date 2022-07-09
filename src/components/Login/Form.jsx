import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Form = () => {

  const [isErrorLogin, setIsErrorLogin] = useState(false)

  const {handleSubmit, reset, register} = useForm()

  const navigate = useNavigate()

  const submit = data => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
    axios.post(URL, data)
      .then(res => {
        localStorage.setItem('token', res.data.data.token)
        navigate('/')
      })
      .catch(err => {
        localStorage.removeItem('token')
        setIsErrorLogin(true)
        setTimeout(() => {
          setIsErrorLogin(false)
        }, 5000)
      })
    reset({
      email: '',
      password: ''
    })
    
  }

  return (
    <form onSubmit={handleSubmit(submit)} className="login__form">
      <h2 className='login__welcome'>Welcome! Enter your email and password to continue</h2>
      <ul className="login__test">
        <h2 className='login__test-title'>Test data</h2>
        <li className="flex-login">
        <i className="fa-solid fa-envelope login__icon"/>mason@gmail.com
        </li>
        <li className="flex-login">
        <i className="fa-solid fa-lock login__icon" />mason1234
        </li>
      </ul>
      <ul className="login__list">
        <li className="login__item">
          <label htmlFor="login-email" className="login__label">Email</label>
          <input 
            type="email"
            className="login__input" 
            id="login-email"
            {...register('email')}
          />
        </li>
        <li className="login__item">
          <label htmlFor="login-pass" className="login__label">Password</label>
          <input 
            type="password" 
            className="login__input" 
            id="login-pass"
            {...register('password')}
          />
        </li>
      </ul>
      <div>
        {
          isErrorLogin && 'Invalid credentials, try again...'
        }
      </div>
      <button className='login__btn'>Login</button>
    </form>
  )
}

export default Form