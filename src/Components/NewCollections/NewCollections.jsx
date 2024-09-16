import React from 'react'
import './NewCollections.css'
import new_collection form '../Assets/new_collection'
const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1>New Dish</h1>
      <hr/>
      <div className='collections'>
        {new_collection.map()}
      </div>
    </div>
  )
}

export default NewCollections
