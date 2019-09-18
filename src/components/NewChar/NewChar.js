import React, { useState, useEffect } from 'react';
import { Input, Label, Textarea } from '../../utils/FormUtils/FormUtils';
import StatsInput from '../StatsInput/StatsInput'
import CharBasicsInput from '../CharBasicsInput/CharBasicsInput';
import CharSkills from '../CharSkills/CharSkills'
import './NewChar.css';

export default function NewChar() {
  const [items, setItems] = useState('')
  const [bio, setBio] = useState('')
  
  return (
    <div className='charContainer'>
      <form id='new-char-form'>
        <div className='char-inputs'>
          <CharBasicsInput />
          <StatsInput />
        </div>
        <div className='skills-and-abilities'>
          <div>
            <h4>Abilities and Skills</h4>
            <CharSkills />
          </div>
        </div>
        <div className='textArea-containers'>
          <div className='textContain'>
            <Label htmlFor='charEquipment' className='textArea-label'><h4>Equipment/Items</h4></Label>
            <Textarea
              id='charEquipment'
              className='equip'
            />
          </div>
          <div className='textContain'>
            <Label htmlFor='bio' className='textArea-label'><h4>Bio</h4></Label>
            <Textarea
              onChange={e => setBio(e.target.value)}
              id='bio'
            />
          </div>
          <div>
            <Label htmlFor='placeholder' className='textArea-label'><h4>Placeholder</h4></Label>
            <Textarea
              id='placeholder'  
            />
          </div>
        </div>
        
        <button type='submit' id='submitButton'>Submit</button>
      </form>
    </div>
  )
}