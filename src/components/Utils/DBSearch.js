import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { db } from '../../firebase';
import DisplayRecipeCardList from './DisplayRecipeCardList'
import InputIngredient from '../../widgets/SearchByIngredient';

// Implement DBsearch to search by: Recipe name, Ingredient list
// searchType: value depending on search by name or seach by ingredient lists
const DBSearch = () => {
  
  const [matchingRecipes, setMatchingRecipes] = useState([]);
  const location = useLocation();

  // Query to search by name
  const recipeNameQueryBuilder = (recipeName) => { 
    let q = collection(db, 'Recipes');

    const recipeWords = recipeName.split(" ");
    const capRecipeName = (recipeWords.map(word => word.charAt(0).toUpperCase() + word.slice(1))).join(" ");
    q = query(q, where('name', "==", capRecipeName))

    // limit the number of recipes retrieved to 9
    q = query(q, limit(9));
    return q;
  }

  // function to dynamically construct the query base on URL parameters
  const recipeIngredientQueryBuilder = (ingredientLists, glutenFree, dairyFree, vegan) => {    
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

    const searchType = searchParams.get('searchType');
    const recipeName = searchParams.get('name')?.toLowerCase();
    const ingredients = searchParams.get('ingredients')?.toLowerCase().split(',');
    const glutenFree = (searchParams.get('glutenFree') ?? 'false') === 'true';
    const dairyFree = (searchParams.get('dairyFree') ?? 'false') === 'true';
    const vegan = (searchParams.get('vegan') ?? 'false') === 'true';
    
    // Recipe query to be updated according the search type
    let recipeQuery;
    console.log({recipeName, ingredients, glutenFree, dairyFree, vegan})

    // build the query base on URL query parameters
    if (searchType === 'byName'){      
      console.log("Search by name query built")
      recipeQuery = recipeNameQueryBuilder(recipeName);

    } else if (searchType === 'byIngredient') {
      console.log("Search by ingredient query built")
      recipeQuery = recipeIngredientQueryBuilder(ingredients, glutenFree, dairyFree, vegan);

    } else {
      // Invalid search type provided
      console.log("Error: Invalid search type cannot build query")
    }

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
      <div className='row'>
        <InputIngredient />
      </div>
      <div className='row'>
        <h4>Search Results</h4>
        {
          matchingRecipes.length > 0 ? (
            <DisplayRecipeCardList recipeList={matchingRecipes} displayCount={9}/>
          ) : (
            <p>Sorry, no recipes found :(</p>
          )
        }
      </div>
    </div>
  )
}

export default DBSearch
