import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import TokenService from '../services/token-service';

export default function Header() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [loginLink, setLoginLink] = useState()

  useEffect(() => {
    const handleLogoutClick = () => {
      TokenService.clearAuthToken();
    }
    setLoggedIn(false)
    TokenService.hasAuthToken() ? setLoggedIn(true): setLoggedIn(false);
  
    if (loggedIn === false) {
      setLoginLink(
        <div>
          <NavLink to='/Login' activeClassName='selected'>
            <button>Login</button>
          </NavLink>
        </div>
      )
    } 
    if(loggedIn === true){
      setLoginLink(
        <div>
          <NavLink to='/' activeClassName='selected'>
            <button onClick={handleLogoutClick}>Logout</button>
          </NavLink>
        </div>
      )
    }
  },[])

  return (
    <div className='headerContian'>
      <NavLink to='/' activeClassName='selected'>
        AMDND
          </NavLink>
      <NavLink to='/register' activeClassName='selected'>
        <button>Register</button>
      </NavLink>
      {loginLink}
    </div>
  )
}


