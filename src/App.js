
import './App.css';

import React, {useState } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RecipeListPage from './pages/RecipeListPage';
import SavedRecipesPage from './pages/SavedRecipesPage';
import AboutUsPage from './pages/AboutUsPage';

import SavedRecipesDetail from './components/SavedRecipesDetail';
import CollectionsDetail from './components/CollectionsDetail';

import Error from './components/Error';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import DisplayRecipe from './components/DisplayRecipe';
import ContactUs from './components/ContactUs';
import Logout from './components/Logout';
import AddRecipeForm from './components/AddRecipeForm';
function App() {
  const [stateDataIntolerances, setStateDataIntolerances] = useState("");
  const [stateDataDiet, setStateDataDiet] = useState("");

  const pull_data = (data) => {
    setStateDataIntolerances(data); 
  }

  const pull_data2 = (data2) => {
    setStateDataDiet(data2); 
  }
  return (
    <main className="App">
      <Header />

      <Routes>
        <Route path='/' element={<LandingPage func={pull_data} func2={pull_data2} />} />
        <Route path='login' element={<LoginForm />} />
        <Route path='register' element={<RegisterForm />} />
        <Route path='about' element={<AboutUsPage />} />
        <Route path='collections' element={<SavedRecipesPage />} />
        <Route path='collections/:id' element={<SavedRecipesDetail />} />
        <Route path='collections/detail' element={<CollectionsDetail />} />
        <Route path='ContactUs' element={<ContactUs />} />


        <Route path='recipes' element={<RecipeListPage intolerances={stateDataIntolerances} diet={stateDataDiet} />} />
        <Route path='show/:id' element={<DisplayRecipe />} />

        <Route path='logout' element={<Logout />} />
        <Route path='detail' element={<SavedRecipesDetail />} />
        <Route path='addrecipeform' element={<AddRecipeForm />} />

        <Route element={Error} />

      </Routes>
    </main>

  );

}

export default App;
