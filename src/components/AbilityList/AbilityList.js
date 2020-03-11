import React from 'react';
import './AbilityList.css'

export default function AbilityList() {
  return (
    <div id='ability_list_container'>
      <h3 id='ability-anchor' className='how-to-play-sections'>Abilties</h3>
      <p>These are exambple abilites.</p>
      {/* need to add ability cost to char abilites. */}
      <h4 className='Ability_type'>Fire Magic</h4>
      <div className='ability_type_container'>
        <h5>Fire Passives (requires 12 inteligence)</h5>
        <ul>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Ignite (P)</span> - All Fire abilities that hit a target will ignite the target dealing 1/2 inteligence modifier damage for 1/2 inteligence modifier turns. Does not stack.</p>
          </li>
        </ul>
        <h5>Fire Tier 1 (requires 12 inteligence)</h5>
        <ul>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Flame Spew (AW) (1 Mana)</span> - Create a 3x3 flame wave that starts adjacent to you, dealing 1d4 + 1/2 inteligence modifier damage to targets hit.</p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Fireball (AW) (1 Mana)</span> - Shoot a fireball from your hands 2 times inteligence modifier spaces away, dealing 1d6 + modifier damage to a target.</p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Flame Whip (Minor)(1 mana)</span> - Create a length of flame that you can wield as a weapon. The weapon is able to attack from around obstacles and past people. Deals 1d6 + inteligence modifier damage. The flame whip Lasts for 1/2 modifier turns.</p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Fire Wall (AW)</span> - Create a wall of fire modifier spaces long that deals 1d6 + modifier damage to any who are in it and who pass through it. Lasts 1/2 inteligence modifier turns cannot cast again until it goes out.turns.</p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Feed the fire (AW)(2 mana)</span> - Increase the intensity of any fires around you adding an extra 1/2 modifier turns to existing fire spells and dealing unblockable mod damage to any ignited enemies.</p>
          </li>
        </ul>
        <h5>Fire Tier 2 (requires 18 inteligence)</h5>
        <ul>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Immolation (minor)(Toggle)(1 mana every turn)</span> - Set yourself on fire, taking 1d4 damage each turn. Anyone who is adjacent to you to receives 1d4 + modifier damage. Unblockable.</p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Fire orb (AW) (3 mana)</span> - Throw a solid orb of condensed fire that explodes dealing 1d6 + modifier damage in a 3x3 areaand knocking anyone in the blast radius one space away from the center of the explosion.</p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Flame Geyser(AW)(3 mana)</span> - Create a spout of flame underneath an enemy unit. dealing 1d8 + modifier damage and blowing enemy into the air and knocking them prone.</p>
          </li>
        </ul>
        <h5>Fire Tier 3 (requires 22 inteligence)</h5>
        <ul>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Pillars of flame(AW)(10 mana)</span> - Create modifier number spouts of flame underneath enemy units. dealing 1d8 + modifier damage and blowing enemy into the air and knocking them prone. </p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Blazing Inferno (AW) (Channeled)(3 mana every turn)</span> - Create swirling flames that reach up into the sky in a 3x3 area and deals 1d10 + modifier damage. Inferno can be moved modifier spaces every turn it is channeled.</p>
          </li>
        </ul>
      </div>
      <h4 className='Ability_type'>Water Magic</h4>
      <div className='ability_type_container'>
        <h5>Water Passives (requires 12 wisdom)</h5>
        <ul>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Condensate (Free passive)</span> - Water Naturally condenses around you to enable the use of your water magic.</p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Douse (P)</span> - All water Abilities douse the target in water reducing movement by 1 for 1/2 modifier turns. Does not stack.</p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Living Water (P)</span> - The condensed water that has collected around you strikes at adjacent enemies at the end of your turn dealing 1/2 modifier damage if it hits.</p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Ice Skater(P)(requires 18 wisdom)</span> - If you have any water charges on your movement action freeze the ground in front of you increasing your movement by 1/2 modifier</p>
          </li>
        </ul>
        <h5>Water Tier 1 (requires 12 wisdom)</h5>
        <ul>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Water Gun(AW) (1 mana)</span> - Shoot a high velocity water stream at your opponent dealing 1d6 + modifier damage.</p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Splish Splash (AW)(1 mana)</span> - Spray water in all adjacent spaces dealing 1d4 damage to all targets surrounding you.</p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Depth Charge (AW)(1 mana)</span> - Condense your water a large sphere that can be lobbed to deal 1d4 + modifier damage per water charge in a 2x2 + 2X2 area in the direction thrown for every extra mana spent up to a max of ½ modifier.</p>
          </li>
        </ul>
        <h5>Water Tier 2 (requires 18 wisdom)</h5>
        <ul>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Glaciate (Minor)(1 mana)</span> - Create a wall of ice modifier spaces long that will now block attacks. Ice wall can Take ½ modifier hits before it is destroyed. When destroyed splish splash is activated from the position of the ice wall. You can have up to 1/2 modifier walls.</p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Icicle drop (AW) (2 mana)</span> - Freeze water into icicles and drop them in a 3x3 space dealing 1d6 + modifier damage and reducing enemy movement by 1/2 modifier for 1/2 modifier turns.</p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Freeze (AW)(2 mana for every enemy you want frozen)</span> - Freeze a doused enemy, encasing them in ice and stopping there movement. </p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Ice Rink(AW)(5 mana)</span> - Coat the battlefield with water that instantly freezes. During the movement phase everyone makes a skill check to see if they fall prone. If you have Ice skater you do not need to make a skill check.</p>
          </li>
        </ul>
        <h5>Water Tier 3 (requires 22 wisdom)</h5>
        <ul>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Tsunami (AW) (10 mana)</span> - Dispel all active water spells and douse targets and collect the water. Create a massive wave from the water you collected dealing 1d6 + (the number of doused and active water spells x wisdom modifier) damage in a 4x6 aria.</p>
          </li>
        </ul>
      </div>
      <h4 className='Ability_type'>Air Magic</h4>
      <div className='ability_type_container'>
        <h5>Air Passives (requires 12 charisma)</h5>
        <ul>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Wind Rush (P)</span> - Increase the wind pressure behind you increasing your movement by 1/4 charisma modifierifier.</p>
          </li>
        </ul>
        <h5>Air Tier 1 (requires 12 charisma)</h5>
        <ul>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Wind Flurry (Minor)(1 mana)</span> - Control the air around your arms to increase the speed of your attacks allowing you to attack a second time with a basic attack that has a -5 to hit.</p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Air Scythe(AW)(1 mana)</span> - control the air to slice through an enemy at range but not adjacent, dealing 1d8 + mod damage.</p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Air Drill (minor)(1 mana)</span> - Surround your weapon with spiraling air. On your next attack dealing an extra + charisma modifier damage.</p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Personal Wind Wall (Toggle)(1 mana every 2 turns)</span> - Create a personal wind wall around you giving you a + mod chance to dodge ranged attacks.</p>
          </li>
        </ul>
        <h5>Air Tier 2 (requires 18 charisma)</h5>
        <ul>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Suffocate (AW)(5 mana)</span> - Steal the air out of the lungs of an enemy dealing  1d8 + mod damage and disabling them for their next turn while they attempt to replenish their air supply.</p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>A leaf on the wind (AW)(Toggle)(2 mana per turn)</span> - You can fly. You can only move char mod spaces when flying. All of your attacks take a -2 to hit. If you are adjacent to an enemy when you use this ability it will provoke an opportunity attack. However while the ability is active you will not provoke opportunity attacks unless you fly directly over someone.</p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Poison air(AW)(channeled)(1 mana every turn)</span> - Isolate harmful air molecules in the air and push them into a cloud of poisonous gases that deal unblockable mod damage on a selected target. </p>
          </li>
        </ul>
        <h5>Air Tier 3 (requires 22 charisma</h5>
        <ul>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Tornado(AW)(channeled)(3 mana every turn)</span> - Create a tornado that sucks in enemies in a 5 x 5 aria. Targets in the tornado skip their movement action. Every turn it is active it will pull enemies closer to the middle of the tornado. When an enemy reaches the middle of the tornado they are flung 1d10 spaces in the opposite direction they were being pulled from, and taking 1d6 + mod damage. Enemies take unblockable charisma mod damage every turn they are in the tornado.</p>
          </li>
        </ul>
      </div>
      <h4 className='Ability_type'>Earth Magic</h4>
      <div className='ability_type_container'>
        <h5>Earth Passives (requires 12 strength)</h5>
        <ul>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Earth Magnet (P)</span> - Rocks and pieces of earth follow your movements whenever you attack an enemy they strike the opponent for half modifier damage. Unblockable.</p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Dirty Caltrops (P)</span> - Disturb the ground you walk on to create spikes that slow enemies by half movement and deal ½ modifier damage. </p>
          </li>
        </ul>
        <h5>Earth Tier 1 (requires 12 strength)</h5>
        <ul>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Mana From the Earth(Minor)(free)</span> - use 2 Mana to instantly gain 1 energy.</p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Ground Launch (AW/Movement)(1 energy)</span> - Use the ground beneath your feet to launch yourself in a direction for your remaining movement. If you hit an enemy deal 1d4 +  mod + spaces moved damage.</p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Earth spike (AW) (1 energy)</span> - You make a shard of earth rapidly grow out of the ground underneath an enemy dealing 1d8 + mod damage and knocking them back a space.</p>
          </li>
        </ul>
        <h5>Earth Tier 2 (requires 18 strength)</h5>
        <ul>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Entomb (AW)(2 energy)</span> - Pull an enemy under the ground dealing 1d4 + mod damage and rooting until they dig themselves out.</p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Earth Mine (Minor)(2 energy)</span> - Activate ground to explode when an enemy walks over it. Deals 1d4 + mod damage in 3x3 area. Must walk on center square to detonate.</p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Moving Earth(AW)(1 energy to create 1 to move)</span> - Create a wall of earth mod spaces wide. for the next mod turns during the movement phase you can move it mod spaces.</p>
          </li>
        </ul>
        <h5>Earth Tier 3 (requires 22 strength)</h5>
        <ul>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Moving Earth(AW)(1 energy to create 1 to move)</span> - Create a wall of earth mod spaces wide. for the next mod turns during the movement phase you can move it mod spaces.</p>
          </li>
        </ul>
      </div>
      <h4 className='Ability_type'>Finess</h4>
      <div className='ability_type_container'>
        <h5>Finess Passives (requires 12 dexterity)</h5>
        <ul>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Backstab(p)</span> - When attacking an enemy from behind gain plus ½ mod to hit and 2x mod damage. Melee only.</p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Auto change (P)</span> - Change your current weapon for a free action.</p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Dodge Roll (P)</span> - When you successfully dodge a melee attack, roll ½ mod spaces in a direction away from your attacker.</p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Dodge Attack (P)(18 Dex)</span> - Gain an extra dodge. After a successful dodge, attack your attacker with a -2 to hit. This will activate first if you also have other dodge abilities.</p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Barbed Arrow (P)(18 Dex)</span> - Your ranged attacks will stick into the target and deal 2 damage every turn until they remove it. Deals mod damage when removed.</p>
          </li>
        </ul>
        <h5>Finess tier 1 (requires 12 dexterity)</h5>
        <ul>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Double Shot (AW)(2 energy)</span> - If you have a ranged weapon fire 2 times at 2 separate targets Modifier Damage only applies to one target.</p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Faint (Minor)(1 energy)</span> - Fake an attack causing the enemy to raise their guard at the wrong time making the next attack against them have a plus 2 to hit. Melee only.</p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Parry and Riposte</span> -
              <ul>
                <li className='ability-list-item'>
                  <p><span className='list-item-name'>Parry... (reaction)(1 energy)</span> - once a turn you can attempt to parry an attack made against you.</p>
                </li>
                <li className='ability-list-item'>
                  <p><span className='list-item-name'>...Riposte (AW)(1 energy)</span> - If you successfully parried an enemy, your next attack against that enemy deals an extra 2X mod damage.</p>
                </li>
              </ul>
            </p>
          </li>
        </ul>
        <h5>Finess tier 2 (requires 18 dexterity)</h5>
        <ul>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Jump Stab, Jump shot (AW)(3 Energy)</span> - Jump and Stab your melee weapon into an enemy, followed by kicking off of the target pulling out a ranged weapon and firing at the same target. Auto Change ability required. Knocks enemy prone.</p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Pincushion (AW)(4 energy)</span> - If you have a ranged weapon fire it mod times into the body of an enemy adjacent to you.</p>
          </li>
        </ul>
        <h5>Finess tier 3 (requires 22 dexterity)</h5>
        <ul>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Weapon blaster (AW)(4 Energy)</span> - Attack with all weapons in your inventory, in succession, that you are able to use, at a single target. Auto Change ability required.</p>
          </li>
        </ul>
      </div>
      <h4 className='Ability_type'>Brawny</h4>
      <div className='ability_type_container'>
        <h5>Brawny passive (requires 12 constitution)</h5>
        <ul>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Dull the pain (P)</span> - You have a ½ chance to take Modifier less damage from every attack while below half health.</p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Berserk (P)(18 Con)</span> - If you reach 0 hit points continue to fight if you land a hit every round. If you reach -2XCon mod hit points go unconscious.</p>
          </li>
        </ul>
        <h5>Brawny tier 1 (requires 12 constitution)</h5>
        <ul>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Head-butt (AW)(1 energy)</span> - head-butt an enemy and hope your head is stronger. Deal 1d6 + mod damage. And daze you or the enemy. Roll a d20 + con mod to decide who is dazed.</p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>JUST DO IT! (Minor)(1 energy)</span> - Add ½ mod to your next roll.</p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Grapple (AW)(1 energy every turn grappling)</span> - Wrestle an enemy to the ground dealing 1d4 + 1.5 mod damage. You stay grappled until the enemy throws you off or you let go. Every turn you grapple deal 1d4 + mod damage.</p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Hurl Weapon (AW)(1 energy)</span> - Fling your weapon modifier spaces at an enemy dealing 1dd8 + weapon damage + mod damage.</p>
          </li>
        </ul>
        <h5>Brawny tier 2 (requires 18 constitution)</h5>
        <ul>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Sabin Suplex (AW)(2 energy)</span> - Grab an enemy and jump in the air. Come down on the enemies turn dealing 1d4 + Mod damage, disorienting, and knocking them prone.</p>
          </li>
          <li className='list-tier2'>
            <p><span className='list-item-name'>Hurl Ally (AW)(2 energy)</span> - Pick up an adjacent ally and throw them mod spaces. If you hit an enemy deal 1d4 + ½ mod damage, and your ally instantly melee basic attacks. Will not use allies turn.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}