import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CharList.css';

export default function CharList() {
  //this page should have links for the view and edit pages
  const [charData, setCharData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/charList')
      .then(res => {
        return res.json()
      }).then(data => {
        setCharData(data.map(char => (
            <li className='charCard' key={char.id}>
              <p>Name: {char.char_name}</p>
              <p>Race: {char.char_race}</p>
              <p>Health: {char.char_health}</p>
              <label>Stats:</label>
              <ul>
                <li>Strength: {char.char_strength}</li>
                <li>Dexterity: {char.char_dexterity}</li>
                <li>Constitution:{char.char_constitution} </li>
                <li>Inteligence: {char.char_inteligence}</li>
                <li>Wisdom: {char.char_wisdom}</li>
                <li>Charisma: {char.char_charisma}</li>
              </ul>
              <label>Modifiers: </label>
              <ul>
                <li>Str Mod: {Math.floor((char.char_strength - 10) / 2)}</li>
                <li>Dex Mod: {Math.floor((char.char_dexterity - 10) / 2)}</li>
                <li>Con Mod: {Math.floor((char.char_constitution - 10) / 2)}</li>
                <li>Int Mod: {Math.floor((char.char_inteligence - 10) / 2)}</li>
                <li>Wis Mod: {Math.floor((char.char_wisdom - 10) / 2)}</li>
                <li>Cha Mod: {Math.floor((char.char_charisma - 10) / 2)}</li>
              </ul>
              <button className='viewButton'>View</button>
              <Link to='/editchar'>
                <button className='editButton'>Edit</button>
              </Link>
            </li>)))
      })
  }, [])

  return (
    <div className='charactersContainer'>
      <h2 id='charListTitle'>My Characters</h2>
      <div className='charListContainer'>
        <ul>
          {charData}
        </ul>
      </div>
    </div>
  )
}