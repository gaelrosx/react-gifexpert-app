import React, { useState } from 'react'
import PropTypes from 'prop-types'


const CategoryAdd = ({ setCategories, categories}) => {
  
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if( inputValue.trim().length > 2 ){
      if( categories.indexOf(inputValue) === -1 ){
        setCategories( [inputValue, ...categories] );
        //setCategories( cat => [...cat, inputValue] );
        setInputValue('')
      }
    }
  }

  return (
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Add category" 
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
      </form>
  )
}

CategoryAdd.propTypes = {
  setCategories: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired
}

export default CategoryAdd