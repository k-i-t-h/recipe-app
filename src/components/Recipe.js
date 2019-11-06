import React from 'react'

const Recipe = ({ title, image, ingredients, calories, totalTime }) => {
  return (
    <main>
      <div className='recipe-container'>
        <h2 className='recipe-title'>{title}</h2>
        <img className='recipe-image' src={image} alt=''></img>
        <p className='recipe-calories'>Est. Calories: {calories}</p>
        <ol>
          {ingredients.map(ingredient => (
            <li className='recipe-item' key={Math.random()}>{ingredient.text}</li>
          ))}
        </ol>
      </div >
    </main>
  )
}

export default Recipe
