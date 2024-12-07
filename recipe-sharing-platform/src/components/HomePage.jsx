import React from 'react'
import { useState, useEffect } from 'react'

function HomePage() {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
          fetch('../src/data.json')
          .then((response) => response.json())
          .then((data) => setRecipes(data))
          .catch((error) => console.error("Error fetching recipes: ", error))
    })
  return (
    <div className='w-full flex  flex-col items-center justify-center md:flex-row  sm:flex-row '>
        {recipes.map((recipe) => (
            <div key={recipe.id} className='sm:w-3/4 min-h-64 border-gray-900 flex items-center  justify-center flex-col m-4  bg-slate-100 rounded-xl hover:shadow-md w-3/4 '>
                <img className='w-full' src={recipe.image} alt={recipe.title} />
                <h2 className='text-center font-serif font-bold text-blue-400'>{recipe.title}</h2>
                <p className='text-center font-normal text-purple-300'>{recipe.summary}</p>
            </div>
        ))}
    </div>
  )
}

export default HomePage