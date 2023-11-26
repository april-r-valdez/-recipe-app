import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import InputIngredient from './SearchByIngredient';

const API_KEY = '8218ef888f3545f08036a30afc6577d7';

const APISearch = () => {
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
        <div className="container" style={{maxWidth: "1200px"}}>
            <div className='row'>
                <InputIngredient />
            </div>
            <div className='row'>
                <h4>Search Results</h4>
                <div className="row row-cols-1 row-cols-md-3 mt-3 mb-3 g-4">
                    {searchedRecipes.map((recipe, index) => (
                        <Link to={'/externalRecipe/' + recipe.id} key={index}>
                            <div className='card h-100'>
                                <img className='card-img-top' alt='...' src={recipe.image}/>
                                <div className='card-body'>
                                    <h5 className='card-title'>{recipe.title}</h5>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default APISearch;
