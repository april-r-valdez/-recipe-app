
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
                placeholder='Ingredient (ex: eggs, milk, butter,...)'
                onChange={handleChange}
            ></input><br></br>
            <input
                className="form-control"
                required
                type='number'
                min='1'
                id='amount'
                name='amount'
                value={inputs.amount}
                placeholder='Amount (ex: 1 egg, 2 cups,...)'
                onChange={handleChange}
            ></input><br></br>
            <select 
                className="form-select" 
                id="inputGroupSelect01"
                name="units" 
                value={inputs.units} 
                onChange={handleChange}>
                <option value="" disabled>Units</option>
                <option value='teaspoons'>teaspoons</option>
                <option value="tablespoons">tablespoons</option>
                <option value="pounds">pounds</option>
                <option value='fluid oz'>fluid oz</option>
                <option value="cups">cups</option>
                <option value="pints">pints</option>
                <option value="quarts">quarts</option>
                <option value="gallons">gallons</option>
            </select><br></br>
            <div class="d-grid gap-2 col-8 mx-auto">
                <button type="submit" class="btn btn-secondary">Add Ingredient</button>
            </div>
        </div>
        
    );
}

export default Ingredient;