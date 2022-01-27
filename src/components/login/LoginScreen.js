import React from 'react';

import './login.css';

export const LoginScreen = () => {

  const handleLogin = () => {
    console.log('handleLogin')
  }


  return (
    <div className="container login-wrapper">
      <div className="login-wrapper-inner">
        <h1>Login</h1>
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
