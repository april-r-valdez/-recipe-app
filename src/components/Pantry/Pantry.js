
const Pantry = ({recipeInfo, ingredientsList, directionsList, handleDelete}) => {
    return (
        <div className="pantry">
            {recipeInfo && (
                <div className="container text-center">
                    <p className="h4">{recipeInfo.name}</p><br></br>
                    <div className="row">
                        <div class="col card border border-3">
                            <h5 class="card-header">Yields</h5>
                            <div class="card-body">
                                <p class="card-text">{recipeInfo.servingSize} servings</p>
                            </div>
                        </div>
                        <div class="col card border border-3">
                            <h5 class="card-header">Prep Time</h5>
                            <div class="card-body">
                                <p class="card-text">{recipeInfo.prepTime} minutes</p>
                            </div>
                        </div>
                        <div class="col card border border-3">
                            <h5 class="card-header">Cook Time</h5>
                            <div class="card-body">
                                <p class="card-text">{recipeInfo.cookTime} minutes</p>
                            </div>
                        </div>
                    </div><br></br>
                </div>
            )}
            <div className="container text-start">
                <div class="row align-items-start text-start">
                    <div class="col">
                        <p className="h5 text-center">Ingredients</p><br></br>
                        <div className="card">
                            <div className="row g-1">
                                <div className="col-md">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="list-group list-group-flush">
                                                {ingredientsList.map((input, index) => (
                                                    <li key={index} className="list-group-item d-flex justify-content-between align-items-start">
                                                        {input.amount} {input.units} {input.ingredient}
                                                        <button type="button" className="close btn btn-sm" aria-label="Close" onClick={(e) => handleDelete(e, index, "ingredient")}>
                                                        <span aria-hidden="true" className="text-dark">&times;</span>
                                                        </button>
                                                    </li>
                                                ))}
                                            </div>
                                            <div className="d-grid gap-2 col-2 mx-auto" role="group" aria-label="Basic example">
                                                {/* <button type="button" className="btn btn-secondary" onClick={resetIngredientList}>RESET</button>                                    */}
                                            </div>                            
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <p className="h5 text-center">Directions</p><br></br>
                        <div className="card">
                            <div className="row g-1">
                                <div className="col-md">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="list-group list-group-flush">
                                                {directionsList.map((directions, index) => (
                                                    <li key={index} className="list-group-item d-flex justify-content-between align-items-start">
                                                        <div>
                                                        <strong>Step {index + 1}</strong><br />
                                                        {directions.direction}
                                                        </div>
                                                        <button type="button" className="close btn btn-sm" aria-label="Close" onClick={(e) => handleDelete(e, index, "direction")}>
                                                        <span aria-hidden="true" className="text-dark">&times;</span>
                                                        </button>
                                                    </li>
                                                ))}
                                            </div>
                                            <div className="d-grid gap-2 col-2 mx-auto" role="group" aria-label="Basic example">
                                                {/* <button type="button" className="btn btn-secondary" onClick={resetIngredientList}>RESET</button>                                    */}
                                            </div>                            
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Pantry;