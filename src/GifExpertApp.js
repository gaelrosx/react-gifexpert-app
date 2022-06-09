import React, { useState } from 'react'
import CategoryAdd from './components/CategoryAdd';
import GiffGrid from './components/GiffGrid';
// import PropTypes from 'prop-types'

const GifExpertApp = props => {
  
  const initialcategories = ['Samuray X']
  const [categories, setCategories] = useState( initialcategories );

  // const handleAddcategory = () => {
  //   //if( categories.indexOf(category) === -1 ){
  //     //setCategores([...categories, 'Human']);
  //     setCategores( cat => [...cat, 'Human'] );
  //     //renderCategories();
  // //  }
  // }

  const renderCategories = () => {
    return categories.map(category => {
        return <GiffGrid 
                key={category} 
                category={category} 
              />
    })
  }
  
  return (
    <>
        <h2>GiffExpertApp</h2>
        <CategoryAdd setCategories ={setCategories} categories={categories}/>
        <hr />
        <ol>
            {renderCategories()}
        </ol>    
    </>
  )
}

// GiffExpertApp.propTypes = {}

export default GifExpertApp