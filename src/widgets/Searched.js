import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import Navbar from './Navbar';


const API_KEY = process.env.REACT_APP_RECIPE_API_KEY;

const Searched = () => {
    let param = useParams();
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    const getRecipesByIngredients = async (ingredients) => {
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredients}&number=6`);
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
        <div className="container" style={{maxWidth: "1000px"}}>
            <Navbar/>
            <div className="row row-cols-1 row-cols-md-3 mt-3 mb-4 g-4">
                {searchedRecipes.map((recipe) => (
                    <Link to={'/recipe/' + recipe.id}>
                        <div className='card' key={recipe.id}>
                            <img className='card-img-top' alt='...' src={recipe.image}/>
                            <div className='card-body'>
                                <h5 className='card-title'>{recipe.title}</h5>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Searched
