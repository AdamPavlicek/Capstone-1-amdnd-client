import React, { useState, useEffect } from 'react';

export default function NewChar() {
  const [charData, setCharData] = useState([])
  const [modifiers, setModifiers] = useState({})

  useEffect(() => {
    setCharData({
      char_name: '',
      char_race: '',
      char_health: 0,
      char_strength: 0,
      char_dexterity: 0,
      char_constitution: 0,
      char_inteligence: 0,
      char_wisdom: 0,
      char_charisma: 0,
      char_equipment: '',
      char_background: ''
    })
  }, [])
  const handleOnChange = (event) => {
    event.preventDefault();
    if (event.currentTarget.id === 'strength') {
      charData.char_strength = event.target.value  
    }
    if (event.currentTarget.id === 'dexterity') {
      charData.char_dexterity = event.target.value
    }
    if(event.currentTarget.id === 'constitution'){
      charData.char_constitution = event.target.value
    }
    if(event.currentTarget.id === 'inteligence'){
      charData.char_inteligence = event.target.value
    }
    if(event.currentTarget.id === 'wisdom'){
      charData.char_wisdom = event.target.value
    }
    if(event.currentTarget.id === 'charisma'){
      charData.char_charisma = event.target.value
    }
    setModifiers({ 
      str_mod: Math.floor((charData.char_strength - 10) / 2),
      dex_mod: Math.floor((charData.char_dexterity - 10) / 2),
      con_mod: Math.floor((charData.char_constitution - 10) / 2),
      int_mod: Math.floor((charData.char_inteligence - 10) / 2),
      wis_mod: Math.floor((charData.char_wisdom - 10) / 2),
      cha_mod: Math.floor((charData.char_charisma - 10) / 2)
    })
    
  }

  return (
    <div>
      <div className='charContainer'>
        <h1 id='newCharTitle'>New Character form</h1>
        <form>
          <div className='basicsContainer'>
            <label htmlFor='charName'>Name: </label>
            <input type='text' id='charName' placeholder='steve' />
            <label htmlFor='charRace'>Race: </label>
            <select id='raceSelect'>
              <option value=''>choose</option>
              <option value="Human">Human</option>
              <option value="Elven">Elven</option>
              <option value="Orc">Orc</option>
              <option value="Dwarf">Dwarf</option>
              <option value="Halfling">Halfling</option>
              <option value="Dryad">Dryad</option>
              <option value="Centaur">Centaur</option>
              <option value="Giant">Giant</option>
              <option value="Mramor">Mramor</option>
              <option value="Icarian">Icarian</option>
            </select>
            <label htmlFor='charHealth'>Health: </label>
            <input type='number' id='charHealth' placeholder='20' />
          </div>
          <div className='statsContainer'>
            <h3>Stats</h3>
            <ul className='stats'>
              <li>
                <label htmlFor='strength'>Strength: </label>
                <input type='number' id='strength' onChange={handleOnChange} className='stat'  />
              </li>
              <li>
                <label htmlFor='dexterity'>Dexterity: </label>
                <input type='number' id='dexterity' onChange={handleOnChange} className='stat' />
              </li>
              <li>
                <label htmlFor='constitution'>Constitution: </label>
                <input type='number' id='constitution' onChange={handleOnChange} className='stat' />
              </li>
              <li>
                <label htmlFor='inteligence'>Inteligence: </label>
                <input type='number' id='inteligence' onChange={handleOnChange} className='stat' />
              </li>
              <li>
                <label htmlFor='wisdom'>Wisdom: </label>
                <input type='number' id='wisdom' onChange={handleOnChange} className='stat' />
              </li>
              <li>
                <label htmlFor='charisma'>Charisma: </label>
                <input type='number' id='charisma' onChange={handleOnChange} className='stat' />
              </li>
            </ul>
            {/* the modifiers should auto calculate based on the stat number */}
            <ul className='stats'>
              <li>
                <p id ='strMod'>Strength Mod: <span className='statMod'>{modifiers.str_mod}</span></p>
              </li>
              <li>
                <p id ='strMod'>Dexterity Mod: <span className='statMod'>{modifiers.dex_mod}</span></p>
              </li>
              <li>
                <p id ='conMod'>Constitution Mod: <span className='statMod'>{modifiers.con_mod}</span></p>
              </li>
              <li>
                <p id ='intMod'>Inteligence Mod: <span className='statMod'>{modifiers.int_mod}</span></p>
              </li>
              <li>
                <p id ='wisMod'>Wisdom Mod: <span className='statMod'>{modifiers.wis_mod}</span></p>
              </li>
              <li>
                <p id ='chaMod'>Charisma Mod: <span className='statMod'>{modifiers.cha_mod}</span></p>
              </li>
            </ul>
          </div>
          <div className='textAreaContainer'>
            <div className='textContain'>
              <label htmlFor='charEquipment' className='equip'><h4>Equipment/Items</h4></label>
              <textarea id='charEquipment' className='equip'></textarea>
            </div>
            <div className='textContain'>
              <label htmlFor='bio' className='biop'><h4>Bio</h4></label>
              <textarea id='bio' htmlFor='biop'></textarea>
            </div>
          </div>
          <button type='submit' id='submitButton'>Submit</button>
        </form>
      </div>
    </div>
  )
}