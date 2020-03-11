import React, { useState } from 'react';
import Rules from '../Rules/Rules';
import AbilityList from '../AbilityList/AbilityList';
import SkillList from '../SkillList/SkillList';
import './HowToPlay.css';

export default function HowToPlay() {
  const [rulesSelected, setRulesSelected] = useState(true)
  const [abilityListSelected, setAbilityListSelected] = useState(false)
  const [skillsSelected, setSkillsSelected] = useState(false)

  const showRules = () => {
    setAbilityListSelected(false)
    setSkillsSelected(false)
    setRulesSelected(true)
  }

  const showAbilitySugestions = () => {
    setRulesSelected(false)
    setSkillsSelected(false)
    setAbilityListSelected(true)
  }

  const showSkills = () => {
    setRulesSelected(false)
    setAbilityListSelected(false)
    setSkillsSelected(true)
  }

  // const showCurrent = () => {
  //   let current = '';

  //   if (rulesSelected === true) {
  //     current = <Rules />
  //   }
  //   if (abilityListSelected === true) {
  //     current = <AbilityList />
  //   }
  //   if (skillsSelected === true) {
  //     current = <SkillList />
  //   }

  //   return current;
  // }

  return (
    <div id='how-to-play-page'>
      <h2>How to play</h2>
      <p>This is how to play the game</p>
      <div id='anchor-wrapper'>
        <a href='#rules-anchor' className='anchor'>Rules</a>
        <a href='#ability-anchor' className='anchor'>Abilites</a>
        <a href='#skill-anchor' className='anchor'>Skills</a>
      </div>
      <Rules />
      <AbilityList />
      <SkillList />
    </div>
  )
}