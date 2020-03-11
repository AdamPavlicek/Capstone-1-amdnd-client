import React from 'react'
import './Rules.css'

export default function Rules() {
  return (
    <div>
      <h3 id='rules-anchor' className='how-to-play-sections'>Rules</h3>
      <h4>Combat</h4>
      <ul>
        <li className='list-tier1'>
          <h5>Turns</h5>
          <ul>
            <li className='list-tier2'>
              <p><span className='list-item-name'>Movement phase</span> - During the Movement phase all party members will move their characters at the same time. The movement phase takes place before the action phase</p>
            </li>
            <li className='list-tier2'>
              <p><span className='list-item-name'>Action phase</span> - During the action phase, party members will roll d20 for initiative. Adding there highest modifier to the roll. The highest roll goes first. After the last person goes, the action phase ends and the movement phase begins again.</p>
            </li>
          </ul>
        </li>
        {/* I can probably replace the list-tier1 ones with divs and p tags. */}
        <li className='list-tier1'> 
          <h5>Attacking</h5>
          <ul>
            <li className='list-tier2'>
              <p><span className='list-item-name'>Basic attack</span> - Basic attacks are the simplest form of attacking an enemy. They can be performed unarmed or with a weapon. The damage from a basic attack depends on the weapon being used and the proficiency with that weapon.</p>
            </li>
            <li className='list-tier2'>
              <p><span className='list-item-name'>Physical abilities</span> - Physical abilities are actions that are used during combat that will either use a standard or minor action. Physical abilities require using a resource called energy. </p>
            </li>
            <li className='list-tier2'>
              <p><span className='list-item-name'>Energy</span> - Energy is a resource used to cast physical abilites. Your total energy is calculated by taking the average of your strength, dexterity, and constitution, and then dividing that number by 3, rounded down.</p>
            </li>
            <li className='list-tier2'>
              <p><span className='list-item-name'>Magical abilities</span> - Magical abilities use a resource called Mana. Every Magical ability will also use a standard or minor action. </p>
            </li>
            <li className='list-tier2'>
              <p><span className='list-item-name'>Mana</span> - Mana is a resource used to cast spells magical abilities. Your total mana is calculated by taking the average of your inteligence, wisdom, and charisma, rounded down.</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}