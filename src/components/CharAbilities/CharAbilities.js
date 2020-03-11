import React, { useState, useEffect } from 'react';
import { Input, Textarea } from '../../utils/FormUtils/FormUtils';
import './CharAbilities.css';

export default function CharAbilities(props) {
  const [abilityName, setAbilityName] = useState('')
  const [abilityDesc, setAbilityDesc] = useState('')
  const [abilityDamageRoll, setAbilityDamageRoll] = useState('1d4')
  const [abilityDamageMod, setAbilityDamageMod] = useState(0)
  const [abilityType, setAbilityType] = useState('mana')
  const [abilityCost, setAbilityCost] = useState(0);
  const [abilities, setAbilities] = useState([])
  const [addingAbility, setAddingAbility] = useState(false)
  const [abilityNameError, setAbilityNameError] = useState(false)
  const [abilityDescError, setAbilityDescError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const [expandButton, setExpandButton] = useState('\\/')

  const handleNewAbility = () => {
    if (abilityName === '') {
      setAbilityNameError(true)
      setAbilityDescError(false)
      setErrorMessage('Ability needs a name')
      return;
    } else if (abilityDesc === '') {
      setAbilityNameError(false)
      setAbilityDescError(true)
      setErrorMessage('Ability needs a description')
      return;
    }

    let modDamage = ''
    if (abilityDamageMod === 0) {
      modDamage = '';
    } else {
      modDamage = ` + ${abilityDamageMod}`;
    }
    const ability = {
      name: abilityName,
      description: abilityDesc,
      damageRoll: abilityDamageRoll,
      damageMod: modDamage,
      type: abilityType,
      cost: abilityCost,
      min: 'hidden'
    }
    setAbilities([...abilities, ability])
    setAddingAbility(false)
    setAbilityName('')
    setAbilityDesc('')
    setAbilityDamageRoll('1d4')
    setAbilityDamageMod(0)
    setAbilityCost(0)
  }


  const removeAbility = index => {
    const charAbilities = [...abilities]
    charAbilities.splice(index, 1)
    setAbilities(charAbilities)
  }

  const minimiseAbility = index => {
    const charAbilities = [...abilities]

    if (charAbilities[index].min === 'hidden') {
      charAbilities[index].min = ''
      setExpandButton('<')
    } else {
      charAbilities[index].min = 'hidden'
      setExpandButton('\\/')
    }
    setAbilities(charAbilities)
  }

  const renderAbilities = () => {
    const charAbilities = [...abilities]

    return (
      <div>
        {charAbilities.map((ability, index) => {
          return (
            <li className='ability' key={index}>
              <div className='ability_header_container'>
                <h5 className='ability_name'>
                  {ability.name}
                </h5>
                <div className='ability_buttons'>
                  <span className='remove_ability remove_index' onClick={() => removeAbility(index)}> X </span>
                  <span className='toggle_hidden' onClick={() => minimiseAbility(index)}>{` ${expandButton}`}</span>
                </div>
              </div>
              <p className={`ability_description ${ability.min}`}>
                {ability.description}
              </p>
              <div className={`ability_details_wrapper ${ability.min}`}>
                <p className='ability_cost'>
                  <span className='span_identifier' >Cost</span>
                  {`${ability.cost} ${ability.type}.`}
                </p>
                <p className='ability_damage'>
                  <span className='span_identifier'>Damage</span>
                  {`${ability.damageRoll}${ability.damageMod}`}
                </p>
              </div>
            </li>
          )
        }
        )}
      </div>
    )
  }

  return (
    <div id='char_abilities_wrapper' >
      <h2>Abilities</h2>
      <ul id='list-abilities'>
        {renderAbilities()}
      </ul>
      {addingAbility ?
        <div id='ability_input_wrapper' className='input_wrapper'>
          {abilityNameError ? <p className='ability-error-message error'>{errorMessage}</p> : <div></div>}
          <Input
            onChange={e => setAbilityName(e.target.value)}
            type='text'
            id='ability_name'
            name='ability_name'
            placeholder='ability name'
            aria-label='ability name'
          />
          {abilityDescError ? <p className='ability-error-message error'>{errorMessage}</p> : <div></div>}
          <Textarea
            onChange={e => setAbilityDesc(e.target.value)}
            type='text'
            id='ability_description'
            name='ability_description'
            placeholder='ability description'
            aria-label='ability description'
          />
          <div id='ability_type_wrapper'>
            <select id='ability_type' className='ability_dropdowns' onChange={e => setAbilityType(e.target.value)}>
              <option value='mana'>Magical</option>
              <option value='energy'>Physical</option>
            </select>
            <Input
              onChange={e => setAbilityCost(e.target.value)}
              type='number'
              id='ability_cost'
              name='ability_cost'
              placeholder='ability cost'
              aria-label='ability cost'
            />
          </div>
          <div id='ability_damage_wrapper'>
            <select id='ability_damage_roll' className='ability_dropdowns' onChange={e => setAbilityDamageRoll(e.target.value)}>
              <option value='1d4'>1d4</option>
              <option value='1d6'>1d6</option>
              <option value='1d8'>1d8</option>
              <option value='1d10'>1d10</option>
              <option value='1d12'>1d12</option>
            </select>
            <Input
              onChange={e => setAbilityDamageMod(e.target.value)}
              type='number'
              id='ability_damage_mod'
              name='ability_damage_mod'
              placeholder='Modifier damage'
              aria-label='Modifier damage'
            />
          </div>
          <button id='add_ability_button' className='button_char' type='button' onClick={handleNewAbility}>Add ability</button>
          <button id='cancel_add_ability' className='button_char' type='button' onClick={() => setAddingAbility(false)}>Cancel</button>
        </div> : <div></div>}
      <button type='button' className='button_char' onClick={() => setAddingAbility(true)}>Add Ability</button>
    </div>
  )
}