import { useState, useEffect } from 'react'

const  Textbox = () => {
    // useState hook updates variables storing user inputs
    const [inputs, setInputs] = useState({
        // default values set
        ingredient:'',
        amount:'',
        units:''
    });

    // useState hook updates list of ingredients
    const [ingredientsList, setIngredientsList] = useState([]);

    // adds object containing user inputs to ingredients list
    const addIngredientsToList = () => {
        setIngredientsList([...ingredientsList, inputs]);
    }

    // handleChange receives event from each input when form is submitted
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    // handleSubmit resets variables to default values
    const handleSubmit = (event) => {
        event.preventDefault();
        addIngredientsToList();
        setInputs({ ingredient:'', amount:'', units:''}); 
    }

    // useEffect hook runs function with every render of component
    // [ingredientsList] is a dependency added and runs function if it changes 
    useEffect(() => {
    }, [ingredientsList]); 

    return (  
        <div className="textbox">
            <br></br><p>Enter your ingredients here</p><br></br>
            <form onSubmit={handleSubmit}>
                <div>
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
                </div><br></br>
                <div>
                    <label>Amount:</label>
                    <input
                        required
                        type='number'
                        min='1'
                        id='amount'
                        name='amount'
                        value={inputs.amount}
                        placeholder='Ex: 1 egg, 2 cups,...'
                        onChange={handleChange}
                    ></input> 
                </div><br></br>
                <div>
                    <label>Units:</label> 
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
                </div><br></br>
                <input name='form' type='submit' value='Generate Recipe'></input>
            </form>
            <br></br><br></br><h2>Your Pantry:</h2><br></br>
            {ingredientsList.map((input, index) => (
            <ul key={index}>
              {input.amount} {input.units} of {input.ingredient}
            </ul>
            ))}
        </div>
    );
}
 
export default Textbox;