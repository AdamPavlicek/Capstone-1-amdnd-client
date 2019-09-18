import React, { useState } from 'react';
import { Input, Textarea } from '../../utils/FormUtils/FormUtils';
import './CharSkills.css';

export default function CharSkills() {
  const [skill, setSkill] = useState({
    skillName: '',
    skillDescription: ''
  })
  const [skills, setSkills,] = useState([])
  const [addingSkill, setAddingSkill] = useState(false)

  const handleNewSkill = () => {
    if (skill === { skillName: '', skillDescription: '' }) {
      return;
    }
    setAddingSkill(false)
    setSkills([...skills, skill])
    setSkill('')
  }

  const removeSkill = index => {
    const charSkills = [...skills]
    charSkills.splice(index, 1)
    setSkills(charSkills)
  }

  return (
    <div className='abilities-skills-and-more'>
      <h2>Skills</h2>
      <div className='skill-list'>
        <ul id='list-skills'>
          {skills.map((skill, index) =>
            <li className='skill' key={index}>
              <h5 className='skill-name'>
                {skill.skillName}
              </h5>
              <p className='skill-description'>
                {skill.skillDescription}
              </p>
              <span className='remove-skill' onClick={() => removeSkill(index)}> Remove Skill </span>
            </li>
          )}
        </ul>
      </div>
      {addingSkill ?
        <div className='skill-input-wrapper'>
          <Input
            onChange={e => setSkill({
              skillName: e.target.value,
              skillDescription: document.querySelector("#add-skill-description").value
            })}
            type='text'
            id='add-skill-name'
            name='skillName'
            placeholder='Skill name'
            aria-label='Skill name'
          />
          <Textarea
            onChange={e => setSkill(
              {
                skillName: document.querySelector("#add-skill-name").value,
                skillDescription: e.target.value
              })}
            type='text'
            id='add-skill-description'
            name='skillDescription'
            placeholder='Skill Description'
            aria-label='Skill Description'
          />
          <button id='add-skill-button' type='button' onClick={handleNewSkill}>Add Skill</button>
        </div> : <div></div>
      }
      <button type='button' onClick={() => setAddingSkill(true)}>New Skill</button>
    </div>
  )
}