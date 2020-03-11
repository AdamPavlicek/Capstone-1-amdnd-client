import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CharList.css';

export default function CharList() {
  //this page should have links for the view and edit pages
  const [charData, setCharData] = useState([]);
  const dummyData = [
    {
      char_id: 1,
      char_name: 'Samson',
      char_race: 'Orc',
      char_health: 14,
      char_strength: 12,
      char_dexterity: 13,
      char_constitution: 11,
      char_inteligence: 14,
      char_wisdom: 16,
      char_charisma: 15,
    },
    {
      char_id: 2,
      char_name: 'Riso Sinta',
      char_race: 'Icarian',
      char_health: 16,
      char_strength: 11,
      char_dexterity: 15,
      char_constitution: 12,
      char_inteligence: 13,
      char_wisdom: 14,
      char_charisma: 16,
    }
  ]

  useEffect(() => {
    setCharData(dummyData)
    // fetch('http://localhost:8000/api/charList/')
    //   .then(res => {
    //     return res.json()
    //   }).then(data => {
    //     data.map(char => {
    //       setCharData(...charData, char);
    //     })
    //   })
  }, [])

  return (
    <div className='charactersContainer'>
      <h2 id='charListTitle'>My Characters</h2>
      <div className='charListContainer'>
        <ul>
          {charData.map((data, index) =>
            <li className='charCard' key={index}>
              <p className='char_info'>Name: {data.char_name}</p>
              <p className='char_info'>Race: {data.char_race}</p>
              <p className='char_info'>Health: {data.char_health}</p>
              <label>Stats:</label>
              <div className='char_status'>
                <ul>
                  <li>Strength: {data.char_strength}</li>
                  <li>Dexterity: {data.char_dexterity}</li>
                  <li>Constitution:{data.char_constitution} </li>
                  <li>Inteligence: {data.char_inteligence}</li>
                  <li>Wisdom: {data.char_wisdom}</li>
                  <li>Charisma: {data.char_charisma}</li>
                </ul>
                <label>Modifiers: </label>
                <ul>
                  <li>Str Mod: {Math.floor((data.char_strength - 10) / 2)}</li>
                  <li>Dex Mod: {Math.floor((data.char_dexterity - 10) / 2)}</li>
                  <li>Con Mod: {Math.floor((data.char_constitution - 10) / 2)}</li>
                  <li>Int Mod: {Math.floor((data.char_inteligence - 10) / 2)}</li>
                  <li>Wis Mod: {Math.floor((data.char_wisdom - 10) / 2)}</li>
                  <li>Cha Mod: {Math.floor((data.char_charisma - 10) / 2)}</li>
                </ul>
              </div>
              <button className='viewButton'>View</button>
              <Link to='/editchar/:char_id'>
                <button className='editButton'>Edit</button>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}