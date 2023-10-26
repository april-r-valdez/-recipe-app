import { useEffect, useState } from "react";
import PlaceholderCard from "../components/Common/PlaceholderCard";

const API_KEY = process.env.REACT_APP_RECIPE_API_KEY;

function FeaturedSection() {
    const [recipes, setRecipes] = useState([]);

    const getFeatureRecipes = async () => {
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=9`);
            if (!response.ok) {
                throw new Error("Error fetching the data");
            }
            const data = await response.json();
            setRecipes(data.recipes);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getFeatureRecipes();
    }, []);

    return (
        <div className="container-fluid">
            <h5>Featured Recipe</h5>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {recipes.map((recipe) => (
                <div key={recipe.id}>
                    <PlaceholderCard recipe={recipe} />
                </div>
            ))}
            </div>
        </div>
    )
}

export default FeaturedSection;