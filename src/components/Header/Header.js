import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Header.css';

export default function Header() {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const handleLogoutClick = () => {
      TokenService.clearAuthToken();
    }
    setLoggedIn(false)
    TokenService.hasAuthToken() ? setLoggedIn(true): setLoggedIn(false);
  
  },[])

  return (
    <div className='headerContian'>
      <NavLink to='/' activeClassName='selected'>
        AMDND
          </NavLink>
      <NavLink to='/register' activeClassName='selected'>
        <button>Register</button>
      </NavLink>
    </div>
  )
}


