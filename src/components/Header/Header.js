import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import TokenService from '../../services/token-service';
import UserContext from '../../Context/UserContext';
import './Header.css';

export default function Header() {
  const userContext = useContext(UserContext)

  const renderLoginLink = () => {
    return (
      <div className='not_logged_in'>
        <NavLink to='/register' className='header-link'>
          Register
        </NavLink>
        <NavLink to='/login' className='header-link'>
          Login
        </NavLink>
      </div>
    )
  }

  const handleLogout = () => {
    TokenService.clearAuthToken()
    userContext.processLogout()
  }

  const renderLogoutLink = () => {
    return (
      <div className='logged_in'>
        <NavLink to='/' onClick={handleLogout}>
          <span className='header-link'>Logout</span>
        </NavLink>
      </div>
    )
  }

  return (
    <header className='header'>
      <h2 className='header_brand'>
        <NavLink to='/' activeClassName='selected'>
          AMDND
        </NavLink>
      </h2>
      <nav className='header_nav'>
        <NavLink to='rules' className='rules-link'>How To Play</NavLink>
        {/* <p className='rules-divider'>  </p> */}
        {TokenService.hasAuthToken()
          ? renderLogoutLink()
          : renderLoginLink()
        }
      </nav>
    </header>
  )
}


