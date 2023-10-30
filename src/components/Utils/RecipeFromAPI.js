import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import RecipePage from '../../widgets/RecipePage';

const API_KEY = process.env.REACT_APP_RECIPE_API_KEY;

const RecipeFromAPI = () => {
  
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [directions, setDirections] = useState([]);
  let param = useParams();

  const getRecipeFromAPI = async (recipeId) => {
    try {
        // calling Spoonacular API to get the recipe based on recipe id
        const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`);
        const data = await response.json();
        
        // parse the data that will be saved into the database
        // const recipeDetail = {
        //     name: data.title,
        //     readyInMinutes: data.readyInMinutes,
        //     imageLoc: data.image, // need to change to local Storage location instead of external url 
        //     directions: data.analyzedInstructions[0].steps.map((instruction) => instruction.step),
        //     ingredients: data.extendedIngredients.map((ingredient) => ingredient.name),
        //     ingredientDetails: data.extendedIngredients.map((ingredient) => ingredient.original),
        //     servings: data.servings,
        //     nutritionalFacts: {},
        //     vegan: data.vegan,
        //     rating: 5,
        // }

        setRecipe(data);
        setIngredients(data.extendedIngredients.map((ingredient) => ingredient.original));
        setDirections(data.analyzedInstructions[0].steps.map((instruction) => instruction.step));

    } catch (error) {
        console.log("Error: ", error);
    }
  };

  // useEffect hook to call getRecipeFromAPI() each time the recipe id parameter changes
  useEffect(() => {
    getRecipeFromAPI(param.id);
  }, [param.id]);
  return (
    <div>
      <RecipePage name={recipe.title} 
              image={recipe.image} 
              ingredients={ingredients} 
              directions={directions} />
    </div>
  )
}

export default RecipeFromAPI
