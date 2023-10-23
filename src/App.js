import React from 'react';
import {Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './scenes/HomeScene/Home';
import UserInput from './widgets/UserInput'
import MyStock from "./widgets/MyStock"
import IngredientsInput from './widgets/IngredientInput/IngredientInput';

function App() {
  return (

    <div className="App" data-bs-theme="light">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/createrecipe' element={<UserInput/>}/>
        <Route path='/instock' element={<MyStock/>}/>
        <Route path='/inputportal' element={<IngredientsInput/>}/>
      </Routes>
      
    </div>
    
  );
}

export default App;
