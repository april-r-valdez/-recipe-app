import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import RecipePage from '../../widgets/RecipePage';
import extractNutritionData from './NutritionFactsParser';
import { uploadImageToFirebase } from './UploadImage';
import saveRecipeToFirebase from './SaveRecipe';
import { db, useAuth } from '../../firebase';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';

const API_KEY = process.env.REACT_APP_RECIPE_API_KEY;

const RecipeFromAPI = () => {

  const curUser = useAuth();
  
  const [recipe, setRecipe] = useState({});
  const [ingredientDetails, setIngredientDetails] = useState([]);
  const [directions, setDirections] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [nutrition, setNutrition] = useState({});
  const [currentRating, setCurrentRating] = useState(5);

  const [recipeRef, setRecipeRef] = useState(null);

  // Signal save recipe successfully or not
  const[saveStatus, setSaveStatus] = useState(false);
  
  // useParam hook to get the recipe id passed as a parameter in the url
  let param = useParams();

  const getRecipeFromAPI = async (recipeId) => {
    try {
        // calling Spoonacular API to get the recipe based on recipe id
        const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`);
        const data = await response.json();
        console.log(data);
        setRecipe(data);
        setIngredients(data.extendedIngredients.map((ingredient) => ingredient.name));
        setIngredientDetails(data.extendedIngredients.map((ingredientDetail) => ingredientDetail.original));
        setDirections(data.analyzedInstructions[0].steps.map((instruction) => instruction.step));
        
        // call parser to parse nutrition fact from summary field in data
        const nutritionData = JSON.parse(extractNutritionData(data.summary));
        const calories = parseInt(nutritionData.calories);
        const fat = parseInt(nutritionData.fat);
        const protein = parseInt(nutritionData.protein);
        const carb = calories - (4*protein + 9*fat);
        const nutrition = {
          calories: calories,
          fat: fat,
          protein: protein,
          carbs: carb,
        }
        setNutrition(nutrition);

    } catch (error) {
        console.log("Error fetching recipe: ", error);
    }
  };

  // useEffect hook to call getRecipeFromAPI() each time a new recipe is generated
  useEffect(() => {
    getRecipeFromAPI(param.id);
  }, [param.id]);


  // save this recipe to the database when user click save button
  //const recipeCollectionRef = collection(db, "Recipes");
  const handleSave = async () => {
    if (!curUser) {
      alert("You are not logged in");
      return;
    }

    try {
      const author = "";
      const imageLocation = recipe.image ? ('RecipeImages/' + String(recipe.id) + '.jpg') : 'RecipeImages/default_image.png';

      // save recipe to firebase
      const recipeRef = await saveRecipeToFirebase(recipe.title, recipe.servings, recipe.readyInMinutes, ingredients, ingredientDetails, directions, imageLocation, author, recipe.vegan, recipe.dairyFree, recipe.glutenFree);
      
      setRecipeRef(recipeRef);
      
      // upload recipe image to Firebase Storage
      if (recipe.image) {  // need to check if there is a image url from the data
        uploadImageToFirebase(recipe.image, imageLocation);
      }

      // saved to favorite list
      await updateDoc(doc(db, 'Users', curUser.uid), {
        favoriteRecipes: arrayUnion(recipeRef),
      })
      console.log("Saved to favorite list");
      
      // set saved successfully
      setSaveStatus(true);

    } catch(error) {
      console.log("Error saving recipe: ", error);
    }
  }

  const handleSubmitRating = (newRating) => {
    setCurrentRating(newRating);
  }

  const handleAddToFavorite = async (isFavorite) => {
    if (curUser && recipeRef) {
      const userRef = doc(db, 'Users', curUser.uid);
      try {
        if (!isFavorite) {
          await updateDoc(userRef, {
            favoriteRecipes: arrayUnion(recipeRef),
          });
          console.log("Add recipe successfully");
        } else {
          await updateDoc(userRef, {
            favoriteRecipes: arrayRemove(recipeRef),
          })
          console.log("Remove recipe successfully");
        }
      } catch(error) {
        console.log("Error: ", error);
      }
    } else {
      console.log("Recipe does not exist in firebase.")
    }
  };

  return (
    <div>
      <RecipePage name={recipe.title} 
              image={recipe.image} 
              ingredients={ingredients}
              ingredientDetails={ingredientDetails} 
              directions={directions} 
              nutrition={nutrition}
              rating={currentRating}
              ratingCount={1}
              author=""
              onSubmitRating={handleSubmitRating}
              onAddToFavoriteList={handleAddToFavorite}/>
      
      {/* User can only click save recipe once, then the button will be disabled */}
      <button className='btn btn-success mb-3' onClick={handleSave} disabled={saveStatus}>
        {saveStatus ? 'Saved' : 'Save Recipe'}
      </button>
    </div>
  )
}

export default RecipeFromAPI;
