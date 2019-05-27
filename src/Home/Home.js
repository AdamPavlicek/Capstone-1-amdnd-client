import React from 'react';
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div className='Home Container'>
      <p>
        Welcome to my modified dnd character creation app. Feel free to look into some of my rules. If you are interested feel free to register and make your first character.
      </p>
      <Link to='/register'>
        <button>Register</button>
      </Link>
      
    </div>
  )
}