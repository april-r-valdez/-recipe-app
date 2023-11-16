import React from 'react';
import {Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './widgets/Navbar';
import Footer from './widgets/Footer';
import Home from './scenes/HomeScene/Home';
import CreateRecipe from './widgets/CreateRecipe'
import MyStock from "./widgets/MyStock"
import RecipeFromAPI from './components/Utils/RecipeFromAPI';
import APISearch from './widgets/APISearch';
import Landing from './scenes/LandingScene/Landing';
import RecipeScorerTester from './components/Utils/RecipeScorerTester';
import ProfilePage from './widgets/ProfilePage';
import RecipeFromDB from './components/Utils/RecipeFromDB';
import ProfileEdit from './widgets/ProfileEdit';
import Login from './widgets/Login';
import DBSearch from './components/Utils/DBSearch';
import OurTeam from './OurTeam';

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
        <Route path='/searchByIngredients' element={<DBSearch/>}/>
        <Route path='/externalSearch/:ingredients' element={<APISearch/>}/>
        <Route path='/externalRecipe/:id' element={<RecipeFromAPI/>}/>
        <Route path='/recipe/:id' element={<RecipeFromDB />}/> 
        <Route path='/landing' element={<Landing/>}/>
        <Route path='/test-recipe-scorer' element={<RecipeScorerTester/>}/>
        <Route path='/edit-profile' element={<ProfileEdit/>}/>
        <Route path='/our-team' element={<OurTeam/>}/>
      </Routes>
      <br></br><br></br><br></br>
      <Footer />
    </div>
    
  );
}

export default App;
