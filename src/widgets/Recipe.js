import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import NavBar from "./Navbar.js";

const API_KEY = process.env.REACT_APP_RECIPE_API_KEY;

const Recipe = () => {
  
  // useParams() hook to get the recipe id from the url 
  let param = useParams();

  const [recipeDetail, setRecipeDetail] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);

  // calling Spoonacular API to get the recipe based on recipe id
  const getRecipe = async (recipeId) => {
    try {
        const response = await fetch(
        `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`
        );
        if (!response.ok) {
            throw new Error("Error fetching the data");
        }
        const recipe = await response.json();
        console.log(recipe);
        setRecipeDetail(recipe);
        setIngredients(recipe.extendedIngredients);
        setInstructions(recipe.analyzedInstructions[0].steps);
    } catch (error) {
        console.log(error);
    }
  };

  useEffect(() => {
    getRecipe(param.id);
  }, [param.id]);

  return (
    <div className='container-md mt-3 mb-3' style={{maxWidth:"1000px", textAlign: "left"}}>
      <NavBar />
      <div className='row mt-4 mb-3'>
        <h2>{recipeDetail.title}</h2>
      </div>
      <div className='row mt-1 mb-5 gx-5'>
        <div className='col'>
          <img src={recipeDetail.image} alt={recipeDetail.title} />
        </div>
        <div className='col'>
          <h4>Ingredients</h4>
          <ul className="list-group list-group-flush">
            {ingredients.map((ingredient) => (
              <li className='list-group-item' key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className='row mt-4 mb-3'>
        <h4>Directions</h4>
        <ul className="list-group list-group-flush">
          {instructions.map((instruction) => (
            <li className="list-group-item" key={instruction.id}>
               {instruction.number}. {instruction.step}
            </li>
          ))}
          </ul>
      </div>
      <div>
        <button className='btn btn-primary'>Save Recipe</button>
      </div>
    </div>
  );
}

export default Recipe
