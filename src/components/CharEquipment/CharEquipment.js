import React, { useState } from 'react';
import { Input, Textarea } from '../../utils/FormUtils/FormUtils';
import './CharEquipment.css';

export default function CharEquipment() {
  const [weapon, setWeapon] = useState('')
  const [armor, setArmor] = useState('')
  const [gearName, setGearName] = useState('')
  const [gearDesc, setGearDesc] = useState('')
  const [equipment, setEquipment] = useState([])
  const [addingGear, setAddingGear] = useState(false)
  const [gearItemError, setGearItemError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleNewEquipment = () => {
    if (gearName === '') {
      setGearItemError(true)
      setErrorMessage('Gear Needs a name')
      return;
    }
    const gear = {
      name: gearName,
      description: gearDesc
    }
    setEquipment([...equipment, gear])
    setGearItemError(false)
    setAddingGear(false)
    setGearName('')
    setGearDesc('')
  }

  const removeEquipment = index => {
    const charEquipment = [...equipment]
    charEquipment.splice(index, 1)
    setEquipment(charEquipment)
  }

  return (
    <div className='equipment_container'>
      <h2>Equipment</h2>
      <ul id='list_equipment'>
        {equipment.map((gear, index) =>
          <li className='gear' key={index}>
            <h5 className='gear_name'>
              {gear.name}
            </h5>
            <p className='gear_description'>
              {gear.description}
            </p>
            <span className='remove_gear remove_index' onClick={() => removeEquipment(index)}> X </span>
          </li>
        )}
      </ul>
      {addingGear ?
        <div id='add_gear_wrapper' className='input_wrapper'>
          {gearItemError ? <p className='gear_name_error error'>{errorMessage}</p> : <div></div>}
          <Input
            onChange={e => setGearName(e.target.value)}
            type='text'
            id='add_gear_title'
            name='gear_title'
            placeholder='Gear title, ex. (Silver Ring)'
            aria-label='Gear title, ex. (Silver Ring)'
          />
          <Textarea
            onChange={e => setGearDesc(e.target.value)}
            id='add_gear_description'
            name='gear_description'
            placeholder='Gear description, ex. (glowes when near water)'
            aria-label='Gear description, ex. (glowes when near water)'
          />
          <button id='add_gear_button' type='button' onClick={handleNewEquipment}>Add Gear</button>
          <button id='cancel_add_gear' type='button' onClick={() => setAddingGear(false)}>Cancel</button>
        </div> : <div></div>}
      <button type='button' onClick={() => setAddingGear(true)}>New Gear</button>
    </div>
  )
}