import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Header(){
  return (
    <div className='headerContian'>
      <nav>
        <NavLink to ='/' activeClassName='selected'>
          AMDND
        </NavLink>
        <NavLink to ='/register' activeClassName='selected'>
        <button>Register</button>
        </NavLink>
      </nav>
    </div>
  )
}