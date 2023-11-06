import React from 'react';
import {Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './widgets/Navbar';
import Home from './scenes/HomeScene/Home';
import CreateRecipe from './widgets/CreateRecipe'
import MyStock from "./widgets/MyStock"
import RecipeFromAPI from './components/Utils/RecipeFromAPI';
import APISearch from './widgets/APISearch';
import Landing from './scenes/LandingScene/Landing';
import RecipeScorerTester from './components/Utils/RecipeScorerTester';
import ProfilePage from './widgets/ProfilePage';
import Login from './Login';
import RecipeFromDB from './components/Utils/RecipeFromDB';
import ProfileEdit from './widgets/ProfileEdit';

function App() {
  return (

    <div className="App" data-bs-theme="light">
      <div className="container-xl">
        <Navbar />
        <br></br>
      </div>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path='/create-recipe' element={<CreateRecipe/>}/>
        <Route path='/in-stock' element={<MyStock/>}/>
        <Route path='/profile-page' element={<ProfilePage/>}/>
        <Route path='/login-page' element={<Login/>}/>
        <Route path='/externalSearch/:ingredients' element={<APISearch/>}/>
        <Route path='/externalRecipe/:id' element={<RecipeFromAPI/>}/>
        <Route path='/recipe/:id' element={<RecipeFromDB />}/> 
        <Route path='/landing' element={<Landing/>}/>
        <Route path='/test-recipe-scorer' element={<RecipeScorerTester/>}/>
        <Route path='/edit-profile' element={<ProfileEdit/>}/>
      </Routes>
      
    </div>
    
  );
}

export default App;
