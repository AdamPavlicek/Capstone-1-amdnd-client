import React, {useState, useEffect} from 'react';
import {Input} from '../../utils/FormUtils/FormUtils'
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';


export default function LoginForm() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const { user_name, password } = ev.target

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
      })
      console.log(user_name.value, password.value)
  }
  
  return (
    <div className='loginContainer'>
      <form className='entryform' onSubmit={handleSubmit} >
        <Input 
          onChange={e => setUserName(e.target.value)}
          id='login-username-input'
          type='text'
          name='username'
          placeholder='username'
          aria-label='username'
          required
        />
        <Input 
          onChange={e => setPassword(e.target.value)}
          id='login-password-input'
          type='text'
          name='password'
          placeholder='Password'
          aria-label='password'
          required
        />
        <button type="submit">LOGIN</button>
      </form>
    </div>
  )
}