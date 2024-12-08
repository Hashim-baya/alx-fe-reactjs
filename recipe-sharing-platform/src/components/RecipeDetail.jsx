import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams(); // Get recipe ID from URL parameter
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch recipe data based on the ID from the URL
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((error) => console.error('Error fetching recipe:', error));
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <button
        onClick={() => navigate('/')}
        className="mb-6 text-blue-500 hover:underline"
      >
        Back to Recipe List
      </button>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full md:w-1/2 h-60 object-cover rounded-md"
          />
          <div className="md:ml-6 mt-4 md:mt-0">
            <h1 className="text-3xl font-bold text-gray-800">{recipe.title}</h1>
            <p className="text-gray-600 mt-2">{recipe.summary}</p>

            <h2 className="text-2xl font-semibold mt-6">Ingredients</h2>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Ingredient 1</li>
              <li>Ingredient 2</li>
              <li>Ingredient 3</li>
              {/* Replace this with actual ingredients from the data */}
            </ul>

            <h2 className="text-2xl font-semibold mt-6">Cooking Instructions</h2>
            <ol className="list-decimal list-inside text-gray-700 mt-2">
              <li>Step 1</li>
              <li>Step 2</li>
              <li>Step 3</li>
              {/* Replace this with actual cooking steps */}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
