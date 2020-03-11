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

  const calculateMod = stat => {
    if (stat >= 21) {
      return Math.floor(((stat - 2) / 3) - 1);
    }
    return Math.floor((stat - 10) / 2);
  }

  const calculateMana = () => {
    const int = inteligence / 3;
    const wis = wisdom / 3;
    const char = charisma / 3;
    const mana = Math.floor(int + wis + char)
    return mana;
  }

  const calculateEnergy = () => {
    const str = strength / 3;
    const dex = dexterity / 3;
    const con = constitution / 3;
    const energy = Math.floor((str + dex + con) / 3);
    return energy;
  }

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
          <p id='strMod' className='statsMod'>Strength Mod<span className='statMod'>{calculateMod(strength)}</span></p>
          <p id='strMod' className='statsMod'>Dexterity Mod<span className='statMod'>{calculateMod(dexterity)}</span></p>
          <p id='conMod' className='statsMod'>Constitution Mod<span className='statMod'>{calculateMod(constitution)}</span></p>
          <p id='intMod' className='statsMod'>Inteligence Mod<span className='statMod'>{calculateMod(inteligence)}</span></p>
          <p id='wisMod' className='statsMod'>Wisdom Mod<span className='statMod'>{calculateMod(wisdom)}</span></p>
          <p id='chaMod' className='statsMod'>Charisma Mod<span className='statMod'>{calculateMod(charisma)}</span></p>
        </div>
      </div>
      <div id='resources'>
        <div className='resource resource_mana'>
          <h4 className='resource_name'>Mana</h4>
          <p className='resource_value'>{calculateMana()}</p>
        </div>
        <div className='resource resource_energy'>
          <h4 className='resource_name'>Energy</h4>
          <p className='resource_value'>{calculateEnergy()}</p>
        </div>
      </div>
    </div>
  )

}