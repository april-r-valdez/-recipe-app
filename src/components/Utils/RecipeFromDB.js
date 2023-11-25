import { doc, getDoc, updateDoc, increment } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db, storage, useAuth } from '../../firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import RecipePage from '../../widgets/RecipePage';

const RecipeFromDB = () => {

  const [recipeName, setRecipeName] = useState();
  const [imageUrl, setImageUr] = useState("");
  const [ingredientDetails, setIngredientDetails] = useState([]);
  const [directions, setDirections] = useState([]);
  const [nutrition, setNutrition] = useState({});
  const [rating, setRating] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);
  const [createdBy, setCreatedBy] = useState("")

  let param = useParams();

  // get the recipe with recipeId from the Recipes collection
  const recipeRef = doc(db, 'Recipes', param.id)
  const curUser = useAuth();
  
  const getRecipeById = async () => {
    try {        
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

            // get rating count
            setRatingCount(recipe.ratingCount);
            
            // get rating points
            setRating(Math.floor(recipe.sumRating / recipe.ratingCount));

            // get author
            setCreatedBy(recipe.createdBy);

        } else {
            console.log("No recipe with id ", param.id, " exists!");
        }
    } catch(error) {
        console.log("Error fetching recipe: ", error);
    }
  };

  const handleRatingChange = async (currentRating) => {
    try {
      await updateDoc(recipeRef, {
        sumRating: increment(currentRating),
        ratingCount: increment(1),
      })
    } catch(error) {
      console.log("Error updating document:", error);
    }
  }

  useEffect(() => {
    getRecipeById();
  }, [param.id])

  return (
    <div>
      <RecipePage name={recipeName}
                  image={imageUrl}
                  ingredients={ingredientDetails}
                  directions={directions}
                  nutrition={nutrition}
                  rating={rating} 
                  ratingCount={ratingCount}
                  author={createdBy}
                  onSubmitRating={handleRatingChange}
                  />
    </div>
  )
}

export default RecipeFromDB
