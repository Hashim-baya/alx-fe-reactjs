import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore  from './recipeStore';
import AddRecipeForm from './AddRecipeForm';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);


  return (
    <div>
      <h1>Recipe List</h1>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <Link to={`/recipe/${recipe.id}`}>View Details</Link>
        </div>
      ))}
       {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes found</p>
      )}
      <AddRecipeForm />
    </div>
  );
};

export default RecipeList;
