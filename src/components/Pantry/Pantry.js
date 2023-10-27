
const Pantry = ({ingredientsList}) => {
    return (
        <div className="pantry">
            {ingredientsList.map((input, index) => (
            <ul key={index}>
              {input.amount} {input.units} {input.ingredient}
            </ul>
            ))}
        </div>
    );
}

export default Pantry;