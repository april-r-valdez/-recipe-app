
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
            <div className="container text-start">
                <div class="row align-items-start text-start">
                    <div class="col">
                        <p className="h5">Ingredients</p><br></br>
                        {ingredientsList.map((input, index) => ( 
                            <div className="row" key={index}>
                                <div className="list-group-item d-flex justify-content-between align-items-start">
                                    <div>{input.amount} {input.units} {input.ingredient}</div>
                                </div><br></br><br></br>
                            </div>
                        ))}
                    </div>
                    <div className="col">
                        <p className="h5">Directions</p><br></br>
                        {directionsList.map((directions, index) => (
                            <div className="row" key={index}>   
                                <div className="list-group-item d-flex justify-content-between align-items-start fw-bold">Step {index + 1}</div><br></br>
                                {directions.direction}
                                <div><br></br></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Pantry;