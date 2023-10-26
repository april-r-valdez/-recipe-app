
const Ingredient = ({inputs, handleChange}) => {
    return (
        <div className="ingredient">
            <input
                className="form-control"
                required
                type='text'
                id='ingredient'
                name='ingredient'
                value={inputs.ingredient}
                placeholder='Ingredient (ex: eggs, milk, butter...)'
                onChange={handleChange}
            ></input>
        </div>
    );
}

export default Ingredient;