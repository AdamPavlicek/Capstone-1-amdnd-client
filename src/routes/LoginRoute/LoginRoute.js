import React, {useState, useEffect} from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function LoginRoute() {


  const handleLoginSuccess = () => {
    
  } 
  
  return (
    <div>
      <h2>Login</h2>
      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </div>
  )
}