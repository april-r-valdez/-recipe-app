import { getDoc} from "firebase/firestore";
import { storage } from "../../firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { useState, useEffect } from "react";
import RatingStars from "../Utils/RatingStars";
import { Link } from "react-router-dom";

function RecipeCard(props) {
    const [myRecipe, setMyRecipe] = useState();
    const [recipeImage, setRecipeImage] = useState();
    const [recipeTitle, setTitle] = useState();
    const [recipeRating, setRating] = useState();
    const [loading, setLoading] = useState(true);
    const [recipeId, setRecipeId] = useState("")


    useEffect(() => {
        // Get Recipe from the Document reference provided
        const getRecipeData = async () => {
            
            try{
                const recipeRef= props.recipeRef;
                const recipeDoc = await getDoc(recipeRef);

                if (recipeDoc.exists()) {
                    const recipe = recipeDoc.data();
                    setMyRecipe(recipe);
                    
                    // get recipe id to pass in the url parameter
                    setRecipeId(recipeDoc.id);
                    
                    // get Title
                    const title = recipe.name;
                    const words = title.split(" ");
                    const capitalizedTitle = (words.map(word => word.charAt(0).toUpperCase() + word.slice(1))).join(" ");
                    setTitle(capitalizedTitle);
                    
                    // Get rating as integer value
                    setRating(parseInt(Math.floor(recipe.sumRating / recipe.ratingCount), 10));
                    
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
            } finally {
                setLoading(false);
            }

        };

    // Call the function once using hook to get the recipe. Do not forget the [] bracket. *Will cause unlimited loop*
        getRecipeData();

    }, []);


    return (
        <Link to={'/recipe/' + recipeId}>
            <div className="card h-100" aria-hidden="true">
                {recipeImage && ( 
                    <img src={recipeImage} className="card-img-top" alt="..." style={{ maxHeight: '100px', objectFit: 'cover' }}/>
                )}
                
                <div className="card-body">
                    <h5 className="font-family-sans-serif">
                        {recipeTitle}
                    </h5>

                    {loading ? (<p>Loading...</p>) :
                        (<p className="card-text">
                            <RatingStars rating={recipeRating} />
                        </p>)
                    }
                </div>
            </div>
        </Link>
    )
}

export default RecipeCard;