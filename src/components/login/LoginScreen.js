import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';
import './login.css';

export const LoginScreen = () => {

  const navigate = useNavigate()

  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    
    dispatch({
      type: types.login,
      payload: { name: 'Nacho' }
    })
    
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
