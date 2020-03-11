import React, { useState } from 'react';
import { Input, Textarea } from '../../utils/FormUtils/FormUtils';
import './CharSkills.css';

export default function CharSkills() {
  const [skillName, setSkillName] = useState('')
  const [skillDesc, setSkillDesc] = useState('')
  const [skills, setSkills,] = useState([])
  const [addingSkill, setAddingSkill] = useState(false)
  const [nameError, setNameError] = useState(false)
  const [descError, setDescError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleNewSkill = () => {
    if (skillName === '') {
      setNameError(true)
      setDescError(false)
      setErrorMessage('Skill needs Name')
      return;
    }
    else if (skillDesc === '') {
      setDescError(true)
      setNameError(false)
      setErrorMessage('Skill needs Description')
      return;
    }
    const skill = {
      name: skillName,
      description: skillDesc
    }
    setSkills([...skills, skill])
    setNameError(false)
    setDescError(false)
    setAddingSkill(false)
    setSkillName('')
    setSkillDesc('')
  }

  const removeSkill = index => {
    const charSkills = [...skills]
    charSkills.splice(index, 1)
    setSkills(charSkills)
  }

  return (
    <div id='char_skills_wrapper' >
      <h2>Skills</h2>
      <ul id='list-skills'>
        {skills.map((skill, index) =>
          <li className='skill' key={index}>
            <h5 className='skill-name'>
              {skill.name}
            </h5>
            <p className='skill-description'>
              {skill.description}
            </p>
            <span className='remove-skill remove_index' onClick={() => removeSkill(index)}> X </span>
          </li>
        )}
      </ul>
      {addingSkill ?
        <div id='skill-input-wrapper' className='input_wrapper'>
          {nameError ? <p className='skill-error-message error'>{errorMessage}</p> : <div></div>}
          <Input
            onChange={e => setSkillName(e.target.value)}
            type='text'
            id='add-skill-name'
            name='skillName'
            placeholder='Skill name'
            aria-label='Skill name'
          />
          {descError ? <p className='skill-error-message error'>{errorMessage}</p> : <div></div>}
          <Textarea
            onChange={e => setSkillDesc(e.target.value)}
            type='text'
            id='add-skill-description'
            name='skillDescription'
            placeholder='Skill Description'
            aria-label='Skill Description'
          />
          <button id='add-skill-button' type='button' onClick={handleNewSkill}>Add Skill</button>
          <button id='cancel-skill-add' type='button' onClick={() => setAddingSkill(false)}>Cancel</button>
        </div> : <div></div>
      }
      <button type='button' className='button_char' onClick={() => setAddingSkill(true)}>Add Skill</button>
    </div>
  )
}