import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

const saveRecipeToFirebase = async (recipeName, servings, cookTime, ingredients, ingredientDetails, directions, imageLocation, author) => {

    // reference to recipe collection
    const recipeCollectionRef = collection(db, "Recipes");

    try {
        // save the data
        const recipeRef = await addDoc(recipeCollectionRef, {
            name: recipeName,
            cookTime: cookTime,
            imageLoc: imageLocation,
            ingredients: ingredients,
            ingredientDetails: ingredientDetails,
            directions: directions,
            servings: servings,
            vegan: false,
            glutenFree: false,
            dairyFree: false,
            sumRating: 5,
            ratingCount: 1,
            createdBy: author
        });

        console.log("Recipe ID: ", recipeRef.id);

    } catch(error) {
        console.log("Error saving recipe: ", error)
    }

}

export default saveRecipeToFirebase;