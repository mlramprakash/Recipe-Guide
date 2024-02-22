import React, { useState } from 'react';
import './AddRecipeForm.css'; 
import { useNavigate } from 'react-router-dom';
const AddRecipeForm = ({ addRecipe }) => {
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/')
    const newRecipe = {
      name: recipeName,
      ingredients: ingredients.split('\n'), 
      instructions: instructions.split('\n'), 
    };
    addRecipe(newRecipe);
   
    setRecipeName('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <form className="add-recipe-form" onSubmit={handleSubmit}>
      <h2>Add a New Recipe</h2>
      <label>
        Recipe Name:
        <input
          type="text"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
          required
        />
      </label>
      <label>
        Ingredients:
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
      </label>
      <label>
        Instructions:
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        />
      </label>
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
