import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PlaceholderCard from '../components/Common/PlaceholderCard';
import { Link } from "react-router-dom";

const API_KEY = '8218ef888f3545f08036a30afc6577d7';

const Searched = () => {
    let param = useParams();
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    const getRecipesByIngredients = async (ingredients) => {
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredients}&number=9`);
            if (!response.ok) {
                throw new Error("Error fetching the data");
            }
            const recipes = await response.json();
            setSearchedRecipes(recipes);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getRecipesByIngredients(param.ingredients)
    }, [param.ingredients]);
    return (
        <div className="container-fluid">
            <Link to={"/"}>Home</Link>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {searchedRecipes.map((recipe) => (
                    <div key={recipe.id}>
                        <PlaceholderCard recipe={recipe} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Searched
