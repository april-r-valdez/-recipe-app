import { useState, useEffect } from 'react'
import Ingredient from '../components/Common/Ingredient';
import Amount from '../components/Common/Amount';
import Units from '../components/Common/Units';
import Pantry from '../components/Pantry/Pantry';

const  UserInput = () => {
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
        <div className="userinput">
            <br></br><p>Enter your ingredients here</p><br></br>
            <form onSubmit={handleSubmit}>
                <Ingredient inputs={inputs} handleChange={handleChange}/><br></br>
                <Amount inputs={inputs} handleChange={handleChange}/><br></br>
                <Units inputs={inputs} handleChange={handleChange}/><br></br>
                <input name='form' type='submit' value='Add ingredient'></input>
            </form><br></br>
            <Pantry ingredientsList={ingredientsList}/>
        </div>
    );
}
 
export default UserInput;