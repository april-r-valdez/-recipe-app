import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db, storage } from '../../firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import RecipePage from '../../widgets/RecipePage';

const RecipeFromDB = () => {

  const [recipeName, setRecipeName] = useState();
  const [imageUrl, setImageUr] = useState("");
  const [ingredientDetails, setIngredientDetails] = useState([]);
  const [directions, setDirections] = useState([]);
  const [nutrition, setNutrition] = useState({});

  let param = useParams();
  
  const getRecipeById = async (recipeId) => {
    try {
        // get the recipe with recipeId from the Recipes collection
        const recipeRef = doc(db, "Recipes", recipeId);
        const recipeDoc = await getDoc(recipeRef);

        if (recipeDoc.exists()) {
            const recipe = recipeDoc.data();
            
            // get recipe name
            setRecipeName(recipe.name);
            
            // get recipe image
            const imageRef = ref(storage, recipe.imageLoc)
            getDownloadURL(imageRef).then((url) => {
                setImageUr(url);
            })
            .catch((error) => {
                console.log("Error getting the image ", error);
            });

            // get ingredients list
            setIngredientDetails(recipe.ingredientDetails);

            // get direction list
            setDirections(recipe.directions);

            // get nutrition fact
            setNutrition(recipe.nutrition);

        } else {
            console.log("No recipe with id ", recipeId, " exists!");
        }
    } catch(error) {
        console.log("Error fetching recipe: ", error);
    }
  };

  useEffect(() => {
    getRecipeById(param.id);
  }, [param.id])

  return (
    <div>
      <RecipePage name={recipeName}
                  image={imageUrl}
                  ingredients={ingredientDetails}
                  directions={directions}
                  nutrition={nutrition} />
    </div>
  )
}

export default RecipeFromDB
