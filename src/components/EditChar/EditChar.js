import React from 'react';
import './EditChar.css'

export default function EditChar() {
	return (
		<div className='charContainer'>
			<h1 id='newCharTitle'>Edit Character form</h1>
			<form>
				<div className='basicsContainer'>
					<label htmlFor='charName'>Name: </label>
					<input type='text' id='charName' placeholder='steve' />
					<label htmlFor='charRace'>Race: </label>
					<select id='raceSelect'>
						<option value=''>choose</option>
						<option value="Human">Human</option>
						<option value="Elven">Elven</option>
						<option value="Orc">Orc</option>
						<option value="Dwarf">Dwarf</option>
						<option value="Halfling">Halfling</option>
						<option value="Dryad">Dryad</option>
						<option value="Centaur">Centaur</option>
						<option value="Giant">Giant</option>
						<option value="Mramor">Mramor</option>
						<option value="Icarian">Icarian</option>
					</select>
					<label htmlFor='charHealth'>Health: </label>
					<input type='number' id='charHealth' placeholder='20' />
				</div>
				<div className='statsContainer'>
					<h3>Stats</h3>
					<ul className='stats'>
						<li>
							<label htmlFor='strength'>Strength: </label>
							<input type='number' id='strength' className='stat' placeholder='10' />
						</li>
						<li>
							<label htmlFor='dexterity'>Dexterity: </label>
							<input type='number' id='dexterity' className='stat' placeholder='10' />
						</li>
						<li>
							<label htmlFor='constitution'>Constitution: </label>
							<input type='number' id='constitution' className='stat' placeholder='10' />
						</li>
						<li>
							<label htmlFor='inteligence'>Inteligence: </label>
							<input type='number' id='inteligence' className='stat' placeholder='10' />
						</li>
						<li>
							<label htmlFor='wisdom'>Wisdom: </label>
							<input type='number' id='wisdom' className='stat' placeholder='10' />
						</li>
						<li>
							<label htmlFor='charisma'>Charisma: </label>
							<input type='number' id='charisma' className='stat' placeholder='10' />
						</li>
					</ul>
					<ul className='stats'>
						<li>
							<label htmlFor='strMod'>Strength Mod: </label>
							<input type='number' id='strMod' className='stat' />
						</li>
						<li>
							<label htmlFor='dexMod'>Dexterity Mod: </label>
							<input type='number' id='dexMod' className='stat' />
						</li>
						<li>
							<label htmlFor='conMod'>Constitution Mod: </label>
							<input type='number' id='conMod' className='stat' />
						</li>
						<li>
							<label htmlFor='intMod'>Inteligence Mod: </label>
							<input type='number' id='intMod' className='stat' />
						</li>
						<li>
							<label htmlFor='wisMod'>Wisdom Mod: </label>
							<input type='number' id='wisMod' className='stat' />
						</li>
						<li>
							<label htmlFor='chaMod'>Charisma Mod: </label>
							<input type='number' id='chaMod' className='stat' />
						</li>
					</ul>
				</div>
				<div className='textAreaContainer'>
					<div className='textContain'>
						<label htmlFor='charEquipment' className='equip'><h4>Equipment/Items</h4></label>
						<textarea id='charEquipment' className='equip'></textarea>
					</div>
					<div className='textContain'>
						<label htmlFor='bio' className='biop'><h4>Background</h4></label>
						<textarea id='bio' className='biop'></textarea>
					</div>
				</div>
				<button type='submit' id='updateButton'>Update</button>
			</form>
		</div>
	)
}