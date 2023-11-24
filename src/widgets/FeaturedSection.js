import { useEffect, useState } from "react";
import DisplayRecipeCardList from "../components/Utils/DisplayRecipeCardList";
import { db } from "../firebase"
import { collection, getDoc, doc} from "firebase/firestore";

function FeaturedSection() {

    // List that will contain the document in Featured
    const [recipeList, setRecipeList] = useState([]);

    // Get the document named Feaured
    const featured = collection(db, "Featured")

    const getRecipeList = async () => {
                try{
                    const docRef = doc(featured, "default");
                    const currentDoc = await getDoc(docRef);
                    const currentList = (currentDoc.data()).recipeList;
                    setRecipeList(currentList);
                } catch (error) {
                    console.error("Error fetching Featured recipe list:", error);
                }
                
            };
    
    useEffect(() => {

        if (recipeList.length === 0) {
            console.log("Fetching data from the database...");
            getRecipeList();
        }
    }, [recipeList, featured]);
    
    return (
        <div className="container-fluid">
            <h4>Featured</h4>
            <DisplayRecipeCardList recipeList={recipeList} displayCount={9}/>
        </div>
    )
}

export default FeaturedSection;