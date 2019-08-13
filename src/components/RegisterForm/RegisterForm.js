import React, { useState } from 'react';
import AuthApiService from '../../services/auth-api-service'
import { Input } from '../../utils/FormUtils/FormUtils';
import './RegisterForm.css';

export default function RegisterForm() {
  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleRegisterSubmit = e => {
    e.preventdefault()
  }

  return (
    <div className='registerContainer'>
      <form className='register-form' onSubmit={handleRegisterSubmit}>
        <Input
          onChange={e => setName(e.target.value)}
          id='register-name-input'
          type='text'
          name='name'
          placeholder='Name'
          aria-label='name'
          required
        />
        <Input
          onChange={e => setUserName(e.target.value)}
          id='register-username-input'
          type='text'
          name='username'
          placeholder='Username'
          aria-label='username'
          required
        />
        <Input
          onChange={e => setPassword(e.target.value)}
          id='register-password-input'
          type='password'
          name='password'
          placeholder='Password'
          aria-label='password'
          required
        />
        <button type='submit' id='register-button'>Register</button>
      </form>
    </div>
  )
}