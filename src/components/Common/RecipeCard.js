import { getDoc} from "firebase/firestore";
import { storage } from "../../firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa"

const ratingColors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
};

function RecipeCard(props) {
    const [myRecipe, setMyRecipe] = useState();
    const [recipeImage, setRecipeImage] = useState();
    const [recipeTitle, setTitle] = useState();
    const [recipeRating, setRating] = useState();

    // Get Recipe from the Document reference provided
    const getRecipe = async () => {
        
        try{
            const recipeRef= props.recipeRef;
            const recipeDoc = await getDoc(recipeRef);

            if (recipeDoc.exists()) {
                const recipe = recipeDoc.data();
                setMyRecipe(recipe);
                
                // get Title
                const title = recipe.name;
                const words = title.split(" ");
                const capitalizedTitle = (words.map(word => word.charAt(0).toUpperCase() + word.slice(1))).join(" ");
                setTitle(capitalizedTitle);
                
                // Get rating
                setRating(recipe.rating);

                // Get image
                const imageRef = ref(storage, recipe.imageLoc)
                getDownloadURL(imageRef).then((url) => {
                    setRecipeImage(url);
                })
                .catch((error) => {
                    console.error('Error getting recipe image url:', error);
                });

                console.log('Recipe data recived');
            } else {
                console.log('Recipe data not found');
            }  
        } catch (error) {
            console.error('Error fetching recipe data for recipe card: ', error);
        }

    };

    // Call the function once using hook to get the recipe. Do not forget the [] bracket. *Will cause unlimited loop*
    useEffect(() => {
        getRecipe();

    }, []);

    return (
        <div className="card" aria-hidden="true">
            {recipeImage && ( 
                <img src={recipeImage} className="card-img-top" alt="..." style={{ maxHeight: '100px', objectFit: 'cover' }}/>
            )}
            
            <div className="card-body">
                <h5 className="font-family-sans-serif">
                {recipeTitle}
                </h5>
                <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
                </p>
                <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
            </div>
        </div>
    )
}

export default RecipeCard;