import React, { useState, useEffect } from 'react';
import { Input, Label, Textarea } from '../../utils/FormUtils/FormUtils';
import StatsInput from '../StatsInput/StatsInput'
import CharBasicsInput from '../CharBasicsInput/CharBasicsInput';
import './NewChar.css';

export default function NewChar() {
  const [items, setItems] = useState('')
  const [bio, setBio] = useState('')
  const [abilities, setAbilities] = useState({
    name: '',
    damage: '',
    description: '',
  })

  return (
    <div className='charContainer'>
      <form id='new-char-form'>
        <div className='char-inputs'>
          <CharBasicsInput />
          <StatsInput />
        </div>
        <div className='textAreaContainer'>
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
            <Label><h4></h4></Label>
          </div>
        </div>
        <button type='submit' id='submitButton'>Submit</button>
      </form>
    </div>
  )
}