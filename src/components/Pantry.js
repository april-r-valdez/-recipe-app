
const Pantry = ({ingredientsList}) => {
    return (
        <div className="Pantry">
            <h2>Your Pantry:</h2><br></br>
            {ingredientsList.map((input, index) => (
            <ul key={index}>
              {input.amount} {input.units} of {input.ingredient}
            </ul>
            ))}
        </div>
    );
}

export default Pantry;