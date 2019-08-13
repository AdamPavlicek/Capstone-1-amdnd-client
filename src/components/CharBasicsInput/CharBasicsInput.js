import React, { useState } from 'react'
import { Input, Label } from '../../utils/FormUtils/FormUtils';
import './CharBasicsInput.css'

export default function CharBasicsInput() {
  const [charName, setCharName] = useState('')
  const [race, setRace] = useState('')
  const [health, setHealth] = useState('')

  return (
    <div className='basicsContainer'>
      <Input
        onChange={e => setCharName(e.target.value)}
        type='text'
        id='charName-input'
        name='character-name'
        placeholder='Character name'
        aria-label='character name'
        required />
      <Label htmlFor='charRace'>Race: </Label>
      <select id='raceSelect' onChange={e => setRace(e.target.value)} >
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
      <Label htmlFor='charHealth'>Health: </Label>
      <Input
        onChange={e => setHealth(e.target.value)}
        type='number'
        id='charHealth'
        name='charHealth'
        required
      />
    </div>
  )

}


