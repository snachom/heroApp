import React from 'react';
import { useNavigate } from 'react-router-dom';

import './login.css';

export const LoginScreen = () => {

  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/', { replace: true })
  }

  return (
    <div className="container login-wrapper">
      <div className="login-wrapper-inner">
        <h1>LOGIN</h1>
        <hr/>

        <button 
          className="btn btn-outline-dark"
          onClick={ handleLogin }
        >
          Login
        </button>
      </div>
    </div>
  )
};
