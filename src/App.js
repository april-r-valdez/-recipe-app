import React from 'react';
import {Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import UserInput from './components/UserInput'
import InStockIngredient from "./components/InStockIngredients"
import IngredientsInput from './components/IngredientInput/IngredientInput';

function App() {
  return (

    <div className="App" data-bs-theme="light">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/createrecipe' element={<UserInput/>}/>
        <Route path='/instock' element={<InStockIngredient/>}/>
        <Route path='/inputportal' element={<IngredientsInput/>}/>
      </Routes>
      
    </div>
    
  );
}

export default App;
