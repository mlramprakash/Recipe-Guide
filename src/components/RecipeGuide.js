import React, { useState } from 'react';
import AddRecipeForm from './AddRecipeForm';

const RecipeGuide = () => {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
    
  };

  return (
    <div>
      <h1>Recipe Guide</h1>
      <AddRecipeForm addRecipe={addRecipe} />
    </div>
  );
};

export default RecipeGuide;
