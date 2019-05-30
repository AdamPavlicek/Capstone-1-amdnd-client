import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CharList.css';

export default function CharList() {
  //this page should have links for the view and edit pages
  const [charData, setCharData] = useState([]);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/charList')
      .then(res => {
        return res.json()
      }).then(data => setCharData(data.characters))


    setCharacters(charData.map(char =>
      <li id={char.id}>
        <li className='charCard'>
          <p>Name: {char.name}</p>
          <p>Race: 'Human'</p>
          <p>health: '20'</p>
          <label>Stats:</label>
          <ul>
            <li>Strength: 12</li>
            <li>Dexterity: 12</li>
            <li>Constitution:12 </li>
            <li>Inteligence: 12</li>
            <li>Wisdom: 12</li>
            <li>Charisma: 12</li>
          </ul>
          <label>Modifiers: </label>
          <ul>
            <li>Str Mod: Strength-10/2</li>
            <li>Dex Mod: Dexterity-10/2</li>
            <li>Con Mod: Constitution-10/2</li>
            <li>Int Mod: Inteligence-10/2</li>
            <li>Wis Mod: Wisdom-10/2</li>
            <li>Cha Mod: Charisma-10/2</li>
          </ul>
          <button className='viewButton'>View</button>
          <Link to='/editchar'>
            <button className='editButton'>Edit</button>
          </Link>
        </li>
      </li>))
  }, [])
  console.log(charData)


  return (
    <div className='container'>
      <h2 id='charListTitle'>My Characters</h2>
      <div className='charListContainer'>
        <ul>
          {characters}
        </ul>
      </div>
    </div>
  )
}