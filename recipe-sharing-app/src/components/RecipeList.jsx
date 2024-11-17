import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore  from './recipeStore';
import AddRecipeForm from './AddRecipeForm';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h1>Recipe List</h1>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <Link to={`/recipe/${recipe.id}`}>View Details</Link>
        </div>
      ))}
      <AddRecipeForm />
    </div>
  );
};

export default RecipeList;
