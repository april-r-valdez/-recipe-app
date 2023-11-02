import { useEffect, useState } from "react";
import RecipeCard from "../components/Common/RecipeCard";
import { db } from "../firebase"
import { collection, getDoc, doc} from "firebase/firestore";

function FeaturedSection() {

    // List that will contain the document in Featured
    const [recipeList, setRecipeList] = useState([]);

    // Get the document named Feaured
    const featured = collection(db, "Featured")
    
    useEffect(() => {
        const getRecipeList = async () => {
            const docRef = doc(featured, "default");
            const currentDoc = await getDoc(docRef);
            const currentList = (currentDoc.data()).recipeList;
            setRecipeList(currentList);
            
        };
        getRecipeList();
    }, []);
    
    return (
        <div className="container-fluid">
            <h4>Featured Recipes</h4>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {recipeList.slice(0, 9).map((recipe) => {

                return (
                    <div className="col"><RecipeCard recipeRef={recipe}/></div>
                );
            })}
            </div>
        </div>
    )
}

export default FeaturedSection;