import { useState } from 'react'
import Navbar from "./Navbar";
import Ingredient from '../components/Common/Ingredient';
import Amount from '../components/Common/Amount';
import Units from '../components/Common/Units';
import Direction from '../components/Common/Direction';
import Pantry from '../components/Pantry/Pantry';
import Metadata from '../components/Common/Metadata';

const  UserInput = () => {
    // useState hook updates variables that store ingredient inputs
    const [inputs, setIngredients] = useState({
        // default values set
        ingredient:'',
        amount:'',
        units:''
    });

    // useState hook updates variable that stores direction  
    const [directions, setDirections] = useState({
        // default values set
        direction:''
    });

    // useState hook updates variables that store recipe data  
    const [metadata, setMetaData] = useState({
        // default values set
        name:'',
        servingSize:'',
        prepTime:'',
        cookTime:''
    });

    // useState hook updates object containing recipe information
    const [recipeInfo, setRecipeInfo] = useState(null);

    // useState hook updates list of ingredients and directions
    const [ingredientsList, setIngredientsList] = useState([]);
    const [directionsList, setDirectionsList] = useState([]);

    // adds object containing ingredient inputs to ingredients list
    const addIngredientsToList = () => {
        setIngredientsList([...ingredientsList, inputs]);
    }

    // adds object containing directions to directions list
    const addDirectionsToList = () => {
        setDirectionsList([...directionsList, directions]);
    }

    // handleChange receives event from user and updates textbox
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        if (name === "ingredient" || name === "amount" || name === "units")
            setIngredients(values => ({...values, [name]: value}))
        else if (name === "direction")
            setDirections(values => ({...values, [name]: value}))
        else if(name === "name" || name === "servingSize" || name === "prepTime" || name === "cookTime")
            setMetaData(values => ({...values, [name]: value}))
    }

    // handleSubmit stores user inputs in their respective lists and resets variables to default values
    const handleSubmit = (event, submitType) => {
        event.preventDefault();
        if(submitType === "ingredient") {
            addIngredientsToList();
            setIngredients({ ingredient:'', amount:'', units:''}); 
        }
        else if(submitType === "direction") {
            addDirectionsToList();
            setDirections({ direction: ''});
        }  
        else if(submitType === "metadata") {
            setRecipeInfo(metadata);
            setMetaData({ name:'', servingSize:'', prepTime:'', cookTime:'' });
        }
    }

    return (  
        <div className="container-xl">
            <div className="row">
                <Navbar/>
            </div>
            <br></br><h1 className="display-5">Create Recipe</h1><br></br>
            <div className="row">
                <div className="col-lg-4">
                    <p className="h4">Information</p><br></br>
                    <form onSubmit={(e) => handleSubmit(e, "metadata")}>
                        <Metadata metadata={metadata} handleChange={handleChange}/>
                    </form><br></br>
                    <p className="h4">Ingredients</p><br></br>
                    <form onSubmit={(e) => handleSubmit(e, "ingredient")}>
                        <Ingredient inputs={inputs} handleChange={handleChange}/><br></br>
                        <Amount inputs={inputs} handleChange={handleChange}/><br></br>
                        <Units inputs={inputs} handleChange={handleChange}/><br></br>
                        <div class="d-grid gap-2 col-8 mx-auto">
                            <button type="submit" class="btn btn-primary">Add Ingredient</button>
                        </div>
                    </form><br></br><br></br>
                    <p className="h4">Directions</p><br></br>
                    <form onSubmit={(e) => handleSubmit(e, "direction")}>
                        <Direction directions={directions} handleChange={handleChange}/><br></br>
                    </form><br></br>
                </div>
                <div className="col-lg-8">
                    {recipeInfo && (
                        <div>
                            <p className="h4">{recipeInfo.name}</p><br></br>
                            <p>Yields: {recipeInfo.servingSize} servings</p>
                            <p>Prep Time: {recipeInfo.prepTime} minutes</p>
                            <p>Cook Time: {recipeInfo.prepTime} minutes</p>
                        </div>
                    )}
                    <Pantry ingredientsList={ingredientsList} directionsList={directionsList}/>
                </div>

                
            </div>
        </div>
    );
}
 
export default UserInput;