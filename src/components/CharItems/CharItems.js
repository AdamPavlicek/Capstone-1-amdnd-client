import React, { useState } from 'react';
import { Input, Textarea } from '../../utils/FormUtils/FormUtils'
import './CharItems.css';

export default function CharItems() {
  const [gold, setGold] = useState(0)

  const [itemName, setItemName] = useState('')
  const [itemDesc, setItemDesc] = useState('')
  const [items, setItems] = useState([])
  const [addingItem, setAddingItem] = useState(false)
  const [itemNameError, setItemNameError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleNewItem = () => {
    if (itemName === '') {
      setItemNameError(true)
      setErrorMessage('Item needs a name')
      return;
    }
    const item = {
      name: itemName,
      description: itemDesc
    }
    setItems([...items, item])
    setItemNameError(false)
    setAddingItem(false)
    setItemName('')
    setItemDesc('')
  }

  const removeItem = index => {
    const charItems = [...items]
    charItems.splice(index, 1)
    setItems(charItems)
  }

  return (
    <div id='items_container'>
      <h2>Items</h2>
      <ul id='list_items'>
        {items.map((item, index) => 
          <li className='item' key={index}>
            <h5 className='item_name'>
              {item.name}
            </h5>
            <p className='item_description'>
              {item.description}
            </p>
            <span className='remove_item remove_index' onClick={() => removeItem(index)}> X </span>
          </li>
        )}
      </ul>
      {addingItem ?
        <div id='addingItem_wrapper' className='input_wrapper'>
          {itemNameError ? <p className='item_name_error error'>{errorMessage}</p> : <div></div>}
          <Input
            onChange={e => setItemName(e.target.value)}
            type='text'
            id='add_item_name'
            name='item_name'
            placeholder='Item name, ex. (Long Sword)'
            aria-label='Item name'
          />
          <Textarea
            onChange={e => setItemDesc(e.target.value)}
            id='add_item_description'
            name='item_description'
            placeholder='Item description, ex. (A long sword that deals 1d6 attack damage + modifier)'
            aria-label='Item description'
          />
          <button id='add_item_button' type='button' onClick={handleNewItem}>Add Item</button>
          <button id='cancel_item_add' type='button' onClick={() => setAddingItem(false)}>Cancel</button>
        </div> : <div></div>}
      <button type='button' onClick={() => setAddingItem(true)}>New Item</button>
    </div>
  )
}