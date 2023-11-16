import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { db } from '../../firebase';
import RecipeCard from '../Common/RecipeCard';

const DBSearch = () => {

  const [matchingRecipes, setMatchingRecipes] = useState([]);
  const location = useLocation();
  
  // function to dynamically construct the query base on URL parameters
  const recipeQueryBuilder = (ingredientLists, glutenFree, dairyFree, vegan) => {
    let q = collection(db, 'Recipes');
    
    // match any recipes with the ingredients field (array type) contains one or more ingredients from the provided ingredient list
    if (ingredientLists != null && ingredientLists.length > 0) {
      q = query(q, where('ingredients', 'array-contains-any', ingredientLists));
    }

    // match any recipe with the glutenFree field (boolean type) is equal to true
    if (glutenFree) {
      q = query(q, where('glutenFree', '==', true));
    }

    if (dairyFree) {
      q = query(q, where('dairyFree', '==', true));
    }

    if (vegan) {
      q = query(q, where('vegan', '==', true));
    }

    // limit the number of recipes retrieved to 9
    q = query(q, limit(9));

    return q;
  };

  useEffect(() => {

    // extracting value from query parameters
    const searchParams = new URLSearchParams(location.search);

    const ingredients = searchParams.get('ingredients')?.toLowerCase().split(',');
    const glutenFree = searchParams.get('glutenFree') === 'true';
    const dairyFree = searchParams.get('dairyFree') === 'true';
    const vegan = searchParams.get('vegan') === 'true';

    // build the query base on URL query parameters
    const recipeQuery = recipeQueryBuilder(ingredients, glutenFree, dairyFree, vegan);

    // perform search
    const searchRecipesByIngredients = async () => {
      try {
        const snapshot = await getDocs(recipeQuery);
        if (!snapshot.empty) {
          const recipes = snapshot.docs.map((doc) => (doc.ref));
          setMatchingRecipes(recipes);
        } else {  // will set to fetch from the API instead later
          setMatchingRecipes([]);
        }
      } catch (error) {
        console.log('Error fetching recipes: ', error);
      }
    };

    searchRecipesByIngredients();

  }, [location.search]);

  return (
    <div className='container-fluid' style={{maxWidth: '1200px'}}>
      <h4>Search Results</h4>
      {
        matchingRecipes.length > 0 ? (
          <div className="row row-cols-1 row-cols-md-3 mt-3 g-4">
          {
            matchingRecipes.map((recipe) => (
              <div className="col">
                <RecipeCard recipeRef={recipe}/>
              </div>
            ))
          }
          </div>
        ) : (
          <p>Sorry, no recipes found :(</p>
        )
      }
    </div>
  )
}

export default DBSearch
