import { useEffect, useState } from "react";
import DisplayRecipeCardList from "../components/Utils/DisplayRecipeCardList";
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
            <DisplayRecipeCardList recipeList={recipeList} displayCount={9}/>
        </div>
    )
}

export default FeaturedSection;