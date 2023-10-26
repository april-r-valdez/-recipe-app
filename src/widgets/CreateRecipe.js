import { useState, useEffect } from 'react'
import Navbar from "./Navbar";
import Ingredient from '../components/Common/Ingredient';
import Amount from '../components/Common/Amount';
import Units from '../components/Common/Units';
import Direction from '../components/Common/Direction';
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
        <div className="container-xl">
            <div className="row">
                <Navbar/>
            </div>
            <br></br><h1 className="display-5">Create My Recipe</h1><br></br>
            <div className="row">
                <div className="col-lg-4">
                    <p className="h4">Add Ingredients</p><br></br>
                        <form onSubmit={handleSubmit}>
                            <Ingredient inputs={inputs} handleChange={handleChange}/><br></br>
                            <Amount inputs={inputs} handleChange={handleChange}/><br></br>
                            <Units inputs={inputs} handleChange={handleChange}/><br></br>
                            <div class="d-grid gap-2 col-8 mx-auto">
                                <button type="submit" class="btn btn-primary">Add Ingredient</button>
                            </div>
                        </form><br></br>
                    <br></br><p className="h4">Add Directions</p><br></br>
                        <form onSubmit={handleSubmit}>
                            <Direction /><br></br>
                            <div class="d-grid gap-2 col-8 mx-auto">
                                <button type="submit" class="btn btn-primary">Add Direction</button>
                            </div>
                        </form><br></br>
                </div>
                <div className="col-lg-8">
                <p className="h4">My Recipe</p><br></br>
                <Pantry ingredientsList={ingredientsList}/>
                </div>
            </div>
        </div>
    );
}
 
export default UserInput;