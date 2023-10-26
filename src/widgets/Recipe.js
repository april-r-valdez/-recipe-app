import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const API_KEY = process.env.REACT_APP_RECIPE_API_KEY;

const Recipe = () => {
    let param = useParams();

  const [recipeDetail, setRecipeDetail] = useState({});
  const [ingredients, setIngredients] = useState([]);

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
    } catch (error) {
        console.log(error);
    }
  };
  useEffect(() => {
    getRecipe(param.id);
  }, [param.id]);

  return (
    <div>
      <h3>{recipeDetail.title}</h3>
      <img src={recipeDetail.image} alt={recipeDetail.title} />
      <h3>Summary</h3>
      <p dangerouslySetInnerHTML={{ __html: recipeDetail.summary }}></p>
      <h3>Directions</h3>
      <p dangerouslySetInnerHTML={{ __html: recipeDetail.instructions }}></p>
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
    </div>
  );
}

export default Recipe
