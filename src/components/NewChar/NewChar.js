import React, { useState, useEffect } from 'react';
import { Input, Label, Textarea } from '../../utils/FormUtils/FormUtils';
import StatsInput from '../StatsInput/StatsInput'
import CharBasicsInput from '../CharBasicsInput/CharBasicsInput';
import CharSkills from '../CharSkills/CharSkills'
import CharEquipment from '../CharEquipment/CharEquipment';
import CharItems from '../CharItems/CharItems';
import CharAbilities from '../CharAbilities/CharAbilities';
import './NewChar.css';

export default function NewChar() {
  const [items, setItems] = useState('')
  const [bio, setBio] = useState('')
  const [charBasics, setCharBasics] = useState([])
  const [charStats, setCharStats] = useState([])

  const handleSubmitChar = () => {

  }

  return (
    <div className='charContainer'>
      <form id='new-char-form'>
        <div className='char-inputs'>
          <CharBasicsInput />
          <div id='stats-skills-abilities-wrapper'>
            <StatsInput />
              <CharAbilities 
                />
              <CharSkills />
          </div>
        </div>

        <div className='textArea-containers'>
          <CharEquipment />
          <CharItems />
          <div className='textContain'>
            <Label htmlFor='bio' className='textArea-label'><h4>Bio</h4></Label>
            <Textarea
              onChange={e => setBio(e.target.value)}
              id='bio'
            />
          </div>
        </div>
        <button type='submit' id='submitButton'>Submit</button>
      </form>
    </div>
  )
}