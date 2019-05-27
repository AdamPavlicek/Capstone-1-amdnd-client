import React from 'react';

export default function CharList() {
  //this page should have links for the view and edit pages
  
  return (
    <div className='container'>
      <h2 id='charListTitle'>My Characters</h2>
      <div className='charListContainer'>
        <ul>
          <li className='charCard'>
            <p>Name: 'Steve'</p>
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
            <button className='editButton'>Edit</button>
          </li>
          <li className='charCard'>
            <p>Name: 'Dave'</p>
            <p>Race: 'Elvish'</p>
            <p>health: '14'</p>
            <label>Stats:</label>
            <ul>
              <li>Strength: 14</li>
              <li>Dexterity: 14</li>
              <li>Constitution: 14 </li>
              <li>Inteligence: 14</li>
              <li>Wisdom: 14</li>
              <li>Charisma: 14</li>
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
            <button className='editButton'>Edit</button>
          </li>
          <li className='charCard'>
            <p>Name: 'Elinor'</p>
            <p>Race: 'Icarian'</p>
            <p>health: '14'</p>
            <label>Stats:</label>
            <ul>
              <li>Strength: 14</li>
              <li>Dexterity: 14</li>
              <li>Constitution: 14 </li>
              <li>Inteligence: 14</li>
              <li>Wisdom: 14</li>
              <li>Charisma: 14</li>
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
            <button className='editButton'>Edit</button>
          </li>
          <li className='charCard'>
            <p>Name: 'sam'</p>
            <p>Race: 'Orc'</p>
            <p>health: '14'</p>
            <label>Stats:</label>
            <ul>
              <li>Strength: 14</li>
              <li>Dexterity: 14</li>
              <li>Constitution: 14 </li>
              <li>Inteligence: 14</li>
              <li>Wisdom: 14</li>
              <li>Charisma: 14</li>
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
            <button className='editButton'>Edit</button>
          </li>
        </ul>
      </div>
    </div>
  )
}