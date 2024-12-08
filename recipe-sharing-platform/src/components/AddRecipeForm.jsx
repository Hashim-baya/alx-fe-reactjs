import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation logic
    if (!title || !ingredients || !steps) {
      setError('All fields are required.');
      return;
    }

    const ingredientsArray = ingredients.split('\n').filter((item) => item.trim() !== '');
    if (ingredientsArray.length < 2) {
      setError('Please include at least two ingredients.');
      return;
    }

    setError('');
    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredientsArray,
      steps: steps.split('\n').filter((step) => step.trim() !== ''),
    };

    console.log('New Recipe:', newRecipe);

    // Clear form fields
    setTitle('');
    setIngredients('');
    setSteps('');
    alert('Recipe added successfully!');
  };

  return (
    <div className="container mx-auto p-6 max-w-lg">
      <h1 className="text-2xl font-bold mb-6">Add a New Recipe</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded">
            {error}
          </div>
        )}

        <div>
          <label htmlFor="title" className="block text-gray-700 font-medium">
            Recipe Title
          </label>
          <input
            id="title"
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
          />
        </div>

        <div>
          <label htmlFor="ingredients" className="block text-gray-700 font-medium">
            Ingredients
          </label>
          <textarea
            id="ingredients"
            rows="4"
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Enter ingredients, one per line"
          ></textarea>
        </div>

        <div>
          <label htmlFor="steps" className="block text-gray-700 font-medium">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            rows="4"
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Enter preparation steps, one per line"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
