import React from 'react';
import {Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './scenes/HomeScene/Home';
import CreateRecipe from './widgets/CreateRecipe'
import MyStock from "./widgets/MyStock"
import IngredientsInput from './widgets/IngredientInput/IngredientInput';
import Searched from './widgets/Searched';

function App() {
  return (

    <div className="App" data-bs-theme="light">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/create-recipe' element={<CreateRecipe/>}/>
        <Route path='/in-stock' element={<MyStock/>}/>
        <Route path='/input-portal' element={<IngredientsInput/>}/>
        <Route path='/searchByIngredients/:ingredients' element={<Searched/>}/>
      </Routes>
      
    </div>
    
  );
}

export default App;
