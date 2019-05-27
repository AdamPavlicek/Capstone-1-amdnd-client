import React from '';
import './Login.css';

export default function Login() {
  return (
    <div className='loginContainer'>
      <form className='entryform'>
        <label htmlFor='userName'>User Name: </label>
        <input id='userName' type='text' placeholder='Enter Username' required />
        <label htmlFor='password'>Password: </label>
        <input id='password' type='text' placeholder='Enter Password' required />
        <button type='submit' id='loginSubmit'>Login</button>
      </form>
    </div>
  )
}