
const Units = ({inputs, handleChange}) => {
    return (
        <div className="input-group mb-3"> 
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
            </select>   
        </div>
    );
}

export default Units;