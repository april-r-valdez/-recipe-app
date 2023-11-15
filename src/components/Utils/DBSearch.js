import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { db } from '../../firebase';
import RecipeCard from '../Common/RecipeCard';

const DBSearch = () => {

  const [matchingRecipes, setMatchingRecipes] = useState([]);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  // extracting value from query parameters
  const ingredientList = searchParams.get('ingredients');
  const glutenVal = searchParams.get('glutenFree');
  const dairyVal = searchParams.get('dairyFree');
  const veganVal = searchParams.get('vegan');

  // convert string to array if it's not null, else set the array to be empty
  const ingredients = ingredientList ? ingredientList.toLowerCase().split(",") : [];
  
  // convert string values to booleans if it's not null, otherwise, set the values to be false
  const glutenFree = (glutenVal ? (glutenVal === 'true') : false);
  const dairyFree = (dairyVal ? (dairyVal === 'true') : false);
  const vegan = (veganVal ? (veganVal === 'true') : false);

  // get recipe collection reference
  const recipeCollectionRef = collection(db, 'Recipes');
  // query database based on ingredients and boolean
  let q = null;
  if (ingredients.length > 0) {
    q = query(recipeCollectionRef, 
                  where('ingredients', 'array-contains-any', ingredients),
                  // where('glutenFree', '==', glutenFree),
                  // where('dairyFree', '==', dairyFree),
                  // where('vegan', '==', vegan),
                  limit(9));
  } else {  // default query
    q = query(recipeCollectionRef, limit(9));
  }

  useEffect(() => {
    const searchRecipesByIngredients = async () => {
      try {
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const recipes = snapshot.docs.map((doc) => (doc.ref));
          setMatchingRecipes(recipes);
        } else {  // will set to call the API instead
          setMatchingRecipes([]);
        }
      } catch (error) {
        console.log('Error fetching recipes: ', error);
      }
    };

    searchRecipesByIngredients();

  }, []);

  return (
    <div className='container-fluid' style={{maxWidth: '1200px'}}>
      <h4>Search Results</h4>
      <div className="row row-cols-1 row-cols-md-3 mt-3 g-4">
        {
          matchingRecipes.map((recipe) => (
            <div className="col">
              <RecipeCard recipeRef={recipe}/>
            </div>
        ))
        }
      </div>
    </div>
  )
}

export default DBSearch
