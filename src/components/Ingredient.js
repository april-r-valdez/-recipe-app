
const Ingredient = ({inputs, handleChange}) => {
    return (
        <div className="ingredient">
            <label>Ingredient:</label>
            <input
                required
                type='text'
                id='ingredient'
                name='ingredient'
                value={inputs.ingredient}
                placeholder='Ex: eggs, milk, butter...'
                onChange={handleChange}
            ></input>
        </div>
    );
}

export default Ingredient;