import { useEffect, useState } from "react";
import PlaceholderCard from "../components/Common/PlaceholderCard";
import RecipeCard from "../components/Common/RecipeCard";
import { useState, useEffect } from "react";
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
            <h5>Featured Recipe</h5>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {recipeList.map((recipe) => {

                return (
                    <div className="col"><RecipeCard recipeRef={recipe}/></div>
                );
            })}
            
            
            <div className="col"><PlaceholderCard/></div>
            <div className="col"><PlaceholderCard/></div>
            <div className="col"><PlaceholderCard/></div>
            <div className="col"><PlaceholderCard/></div>
            <div className="col"><PlaceholderCard/></div>
            <div className="col"><PlaceholderCard/></div>
            <div className="col"><PlaceholderCard/></div>
            <div className="col"><PlaceholderCard/></div>
            </div>
        </div>
    )
}

export default FeaturedSection;