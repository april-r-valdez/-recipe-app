
const Pantry = ({ingredientsList, directionsList}) => {
    return (
        <div className="pantry">
            <p className="h5">Ingredients</p><br></br>
            {ingredientsList.map((input, index) => (
                <ul key={index}>
                {input.amount} {input.units} {input.ingredient}
                </ul>
            ))}
            <p className="h5">Directions</p><br></br>
            {directionsList.map((directions, index) => (
                <ul key={index}>
                    Step {index + 1}: <br></br>
                    {directions.direction}
                </ul>
            ))}
        </div>

    );
}

export default Pantry;