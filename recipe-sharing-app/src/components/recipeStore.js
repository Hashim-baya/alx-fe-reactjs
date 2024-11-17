import { create } from 'zustand'

const useRecipeStore = create((set) => ({
    recipes: [],
    addRecipe: (newRecipe) => set(state => ({
        recipes: [...state.recipes, newRecipe]
    })),
    deleteRecipe:(id) => set(state => ({
        recipes: state.recipes.filter(recipe => recipe.id !== id)
    })),
    updateRecipe: (updatedRecipe) => set(state => ({
        recipes: state.recipes.map(recipe => recipe.id === updatedRecipe.id ? updatedRecipe : recipe)
    })),
    searchTerm: '',
    setSearchTerm: (term) => set({ searchTerm: term }),
    filteredRecipes: [],
    filterRecipes: () => set(state => ({
        filteredRecipes: state.recipes.filter(recipe => recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
    })),
    setFilters: (filters) => {
        set((state) => {
          const filtered = state.recipes.filter((recipe) =>
            Object.keys(filters).every((key) => {
              return recipe[key].includes(filters[key]);
            })
          );
          return { filteredRecipes: filtered };
        });
      },
    setRecipes: (recipes) => set({recipes}),
}))

export default useRecipeStore;