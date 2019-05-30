import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const data = [userName, password]

  function handleLoginButton() {
    fetch('http://localhost:8000/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(response => console.log('success:', JSON.stringify(response)))
      .catch(err => console.error('Error:', err));
  }

  return (
    <div className='loginContainer'>
      <form className='entryform'>
        <label htmlFor='userName'>User Name: </label>
        <input id='userName' type='text' value={userName} onChange={event => setUserName(event.target.value)} placeholder='Enter Username' required />
        <label htmlFor='password'>Password: </label>
        <input 
          id='password' 
          type='password' 
          value={password} 
          onChange={event => setPassword(event.target.value)} 
          placeholder='Enter Password' required />

        {/* Will take you to users char list when login pressed if not correct user will inform them of wrong inputs */}
        <button id='loginSubmit' onClick={handleLoginButton}>Login</button>
        {/* <Link to='/charlist' >
          
        </Link> */}
      </form>
    </div>
  )
}