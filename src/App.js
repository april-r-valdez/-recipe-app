import React from 'react';
import {Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './scenes/HomeScene/Home';
import CreateRecipe from './widgets/CreateRecipe'
import MyStock from "./widgets/MyStock"
import IngredientsInput from './widgets/IngredientInput/IngredientInput';
import RecipeFromAPI from './components/Utils/RecipeFromAPI';
import APISearch from './widgets/APISearch';
import Landing from './scenes/LandingScene/Landing';


import ProfilePage from './widgets/ProfilePage';
import Login from './Login';
import RecipeFromDB from './components/Utils/RecipeFromDB';

function App() {
  return (

    <div className="App" data-bs-theme="light">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/create-recipe' element={<CreateRecipe/>}/>
        <Route path='/in-stock' element={<MyStock/>}/>
        <Route path='/input-portal' element={<IngredientsInput/>}/>
        <Route path='/profile-page' element={<ProfilePage/>}/>
        <Route path='/login-page' element={<Login/>}/>
        <Route path='/externalSearch/:ingredients' element={<APISearch/>}/>
        <Route path='/externalRecipe/:id' element={<RecipeFromAPI/>}/>
        <Route path='/recipe/:id' element={<RecipeFromDB />}/> 
        <Route path='/landing' element={<Landing/>}/>
      </Routes>
      
    </div>
    
  );
}

export default App;
