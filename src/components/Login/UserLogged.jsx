import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Form from './Form';
import './style/userLogged.css'

const UserLogged = () => {

  const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    }

  return (
    <article className='user__container'>
      <i className="fa-solid fa-user-check icon"></i>
      <h2 className='user__successful'>User Logged</h2>
      <button onClick={logout} className='user__btn'>Log Out</button>
    </article>
  )
}

export default UserLogged