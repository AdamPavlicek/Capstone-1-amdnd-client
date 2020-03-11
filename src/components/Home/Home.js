import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css'

export default function Home() {
  return (
    <div className='homeContainer'>
      <p id='entryWelcome'>
        Welcome to my modified dnd character creation app. Feel free to look into some of my rules. If you are interested feel free to register and make your first character.
      </p>
      <div id='links-wrapper'>
      <Link to='/register'>
        <button>Register</button>
      </Link>
      <Link>
        <button>Login</button>
      </Link>
      </div>
    </div>
  )
}