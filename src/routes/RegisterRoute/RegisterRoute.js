import React, {useState, useEffect} from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

export default function RegisterRoute() {

  const handleRegisterSuccess = () => {
    
  }

  
  return (
    <div>
      <h2>Login</h2>
      <RegisterForm onRegisterSuccess={handleRegisterSuccess} />
    </div>
  )
}