import React, { useState } from 'react';
import { Input, Label } from '../../utils/FormUtils/FormUtils';
import './StatsInput.css'

export default function StatsInput() {
  const [strength, setStrength] = useState(10)
  const [dexterity, setDexterity] = useState(10)
  const [constitution, setConstritution] = useState(10)
  const [inteligence, setInteligence] = useState(10)
  const [wisdom, setWisdom] = useState(10)
  const [charisma, setCharisma] = useState(10)

  return (
    <div className='statsContainer'>
      <h3>Stats</h3>
      <div className='stats-holder'>
        <div className='stats'>
          <Label htmlFor='strength'>Strength</Label>
          <Input
            onChange={e => setStrength(e.target.value)}
            value={strength}
            id='strength'
            type='number'
            name='strength'
            className='stat'
            required
          />

          <Label htmlFor='dexterity'>Dexterity</Label>
          <Input
            onChange={e => setDexterity(e.target.value)}
            value={dexterity}
            id='dexterity'
            type='number'
            name='dexterity'
            className='stat'
            required
          />

          <Label htmlFor='constitution'>Constitution</Label>
          <Input
            onChange={e => setConstritution(e.target.value)}
            value={constitution}
            id='constitution'
            type='number'
            name='constitution'
            className='stat'
            required
          />

          <Label htmlFor='inteligence'>Inteligence</Label>
          <Input type='number'
            onChange={e => setInteligence(e.target.value)}
            value={inteligence}
            id='inteligence'
            type='number'
            name='inteligence'
            className='stat'
            required
          />

          <Label htmlFor='wisdom'>Wisdom</Label>
          <Input
            onChange={e => setWisdom(e.target.value)}
            value={wisdom}
            id='wisdom'
            type='number'
            name='inteligence'
            className='stat'
            required
          />

          <Label htmlFor='charisma'>Charisma</Label>
          <Input
            onChange={e => setCharisma(e.target.value)}
            value={charisma}
            id='charisma'
            type='number'
            name='charisma'
            className='stat'
            required
          />

        </div>
        <div className='stats'>

          <p id='strMod'>Strength Mod <span className='statMod'>{Math.floor((strength - 10) / 2)}</span></p>

          <p id='strMod'>Dexterity Mod <span className='statMod'>{Math.floor((dexterity - 10) / 2)}</span></p>

          <p id='conMod'>Constitution Mod <span className='statMod'>{Math.floor((constitution - 10) / 2)}</span></p>

          <p id='intMod'>Inteligence Mod <span className='statMod'>{Math.floor((inteligence - 10) / 2)}</span></p>

          <p id='wisMod'>Wisdom Mod <span className='statMod'>{Math.floor((wisdom - 10) / 2)}</span></p>

          <p id='chaMod'>Charisma Mod <span className='statMod'>{Math.floor((charisma - 10) / 2)}</span></p>

        </div>
      </div>

    </div>
  )

}