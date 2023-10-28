
const Pantry = ({recipeInfo, ingredientsList, directionsList}) => {
    return (
        <div className="pantry">
            {recipeInfo && (
                <div className="container text-center">
                    <p className="h4">{recipeInfo.name}</p><br></br>
                    <div class="row align-items-center">
                        <div class="col">Yields:</div>
                        <div class="col">Prep Time:</div>
                        <div class="col">Cook Time:</div>
                    </div><br></br>
                    <div class="row align-items-center">
                        <div class="col">{recipeInfo.servingSize} servings</div>
                        <div class="col">{recipeInfo.prepTime} minutes</div>
                        <div class="col">{recipeInfo.prepTime} minutes</div>
                    </div><br></br><br></br>
                </div>
            )}
            <p className="h5 text-start">Ingredients</p><br></br>
            {ingredientsList.map((input, index) => (
                <ul key={index}>
                    <div className="row">
                        <div className="list-group-item d-flex justify-content-between align-items-start">
                            {input.amount} {input.units} {input.ingredient}
                        </div><br></br><br></br>
                    </div>
                </ul>
            ))}
            <p className="h5 text-start">Directions</p><br></br>
            {directionsList.map((directions, index) => (
                <ul key={index}>   
                    <div className="row">
                        <div class="list-group-item d-flex justify-content-between align-items-start fw-bold">Step {index + 1}</div><br></br>
                        {directions.direction}
                    </div><br></br><br></br>   
                </ul>
            ))}
        </div>

    );
}

export default Pantry;