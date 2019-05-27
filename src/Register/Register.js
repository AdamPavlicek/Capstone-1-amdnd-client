import React from 'react';

export default function Register(){
  return (
    <div className='registerContainer'>
      <form>
        <label htmlFor='email'>email: </label>
        <input id='email' type='text' placeholder='Enter Email' required/>
        <label htmlFor='userName'>Username: </label>
        <input id='userName' type='text' placeholder='Enter Username' required/>
        <label htmlFor='password'>Password: </label>
        <input id='password' type='text' placeholder='Enter Password' required/>
        <label htmlFor='passwordRepeat'>Repeat Password: </label>
        <input id='passwordRepeat' type='text' placeholder='repeat password' required/>
        <button type='submit' id='registerSubmit'>Register</button>
      </form>
    </div>
  )
}