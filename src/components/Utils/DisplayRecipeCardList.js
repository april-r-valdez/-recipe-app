import RecipeCard from "../Common/RecipeCard";
import shuffleArray from "./shuffleArray";

// This function displays the cards using recipe reference ID
// recipeList: list of recipe reference id from firestore
// displayCount: Number of cards to display
const DisplayRecipeCardList = ({recipeList, displayCount}) => {     
    return (
        <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 row-cols-md-3 g-4">            
            {/** Shuffle the list and create recipe cards*/}
            {shuffleArray(recipeList).slice(0, displayCount).map((recipe, index) => (
                <div key={index} className="col">
                    <RecipeCard recipeRef={recipe}/>
                </div>
            ))}
        </div>
    );
};


export default DisplayRecipeCardList;