
const Units = ({inputs, handleChange}) => {
    return (
        <div className="units">
            <label for="units">Units:</label> 
            <select id='units' name='units' value={inputs.units} onChange={handleChange}>
                <option value=''></option>
                <option value='tsp'>tsp</option>
                <option value="tbsp">tbsp</option>
                <option value="lbs">lbs</option>
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