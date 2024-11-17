import React from 'react';
import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList'
import RecommendationsList from './components/RecommendationsList';
import useRecipeStore from './components/recipeStore';

function App() {

  const { addFavorite, removeFavorite, favorites } = useRecipeStore(
    (state) => ({
      addFavorite: state.addFavorite,
      removeFavorite: state.removeFavorite,
      favorites: state.favorites,
    })
  );

  const toggleFavorite = (recipeId) => {
    if (favorites.includes(recipeId)) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <Router>
      <div className="app-container">
        <SearchBar />
        <RecipeList toggleFavorite={toggleFavorite} />
        <FavoritesList />
        <RecommendationsList />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

// Wrapper to extract recipeId from URL
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={parseInt(id, 10)} />;
};

export default App;
