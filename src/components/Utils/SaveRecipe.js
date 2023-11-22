import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

const saveRecipeToFirebase = async (recipeName, servings, cookTime, ingredients, ingredientDetails, directions, image) => {

    // reference to recipe collection
    const recipeCollectionRef = collection(db, "Recipes");

    try {
        // upload image to Firebase storge
        const imageLocation = ""

        // save the data
        const recipeRef = await addDoc(recipeCollectionRef, {
            name: recipeName,
            cookTime: cookTime,
            imageLoc: image,
            ingredients: ingredients,
            ingredientDetails: ingredientDetails,
            directions: directions,
            servings: servings,
            vegan: false,
            glutenFree: false,
            dairyFree: false,
            sumRating: 5,
            ratingCount: 1

        });

        console.log("Recipe ID: ", recipeRef.id);

    } catch(error) {
        console.log("Error saving recipe: ", error)
    }

}

export default saveRecipeToFirebase;