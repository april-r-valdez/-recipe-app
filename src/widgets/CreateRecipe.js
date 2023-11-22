import { useState } from 'react'
import Ingredient from '../components/Common/Ingredient';
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

    // useState hook updates variable containing input image
    const [recipeImg, setRecipeImg] = useState(null);

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
        let value = event.target.value;
        if (name === "ingredient" || name === "amount" || name === "units") {
            value = value.replace(/[^A-Za-z0-9" "]/g, '');
            value = value.slice(0).toLowerCase();
            setIngredients(values => ({...values, [name]: value}))
        }
        else if (name === "direction") {
            setDirections(values => ({...values, [name]: value}))
        }
        else if(name === "name" || name === "servingSize" || name === "prepTime" || name === "cookTime") {
            value = value.replace(/[^A-Za-z0-9" "]/g, '');
            setMetaData(values => ({...values, [name]: value}))
        }
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

    // handleDelete deletes input from their respective lists and modifies array indices accordingly
    const handleDelete = (_, id, deleteType) => {
        if(deleteType === "ingredient") {
            const updatedIngredients = ingredientsList.filter((_, index) => index !== id);
            setIngredientsList(updatedIngredients);
        }
        else if(deleteType === "direction") {
            const updatedDirections = directionsList.filter((_, index) => index !== id);
            setDirectionsList(updatedDirections);
        }
    }

    // handleImageChange stores input image to a variable
    const handleImageChange = (e) => {
        setRecipeImg(e.target.files[0]);
    }

    return (  
        <div className="container-xl">
            <h1 className="display-5">Create Recipe</h1><br></br><br></br>
            <div className="row">
                <div className="col-lg-4">
                    <p className="h4">Information</p><br></br>
                    <form onSubmit={(e) => handleSubmit(e, "metadata")}>
                        <Metadata metadata={metadata} handleChange={handleChange}/>
                    </form><br></br><br></br>
                    <p className="h4">Ingredients</p><br></br>
                    <form onSubmit={(e) => handleSubmit(e, "ingredient")}>
                        <Ingredient inputs={inputs} handleChange={handleChange}/>
                    </form><br></br><br></br>
                    <p className="h4">Directions</p><br></br>
                    <form onSubmit={(e) => handleSubmit(e, "direction")}>
                        <Direction directions={directions} handleChange={handleChange}/>
                    </form><br></br><br></br>
                    <div className='row'>
                        <div className="col-4 mb-3">
                            <p className="h4">Upload Image</p><br></br>
                            <label htmlFor="formFile" style={{ cursor: "pointer" }}>
                                <img src="./images/upload-img.png" alt="" style={{ width: "75%", height: "75%", objectFit: "cover", cursor: "pointer" }}/>
                                <input class="form-control" type="file" id="formFile" style={{ display: "none" }} onChange={handleImageChange}/>
                            </label>
                        </div>
                        <div className="col-4 mb-3 ms-auto">
                            <p className="h4">Save Recipe</p><br></br>
                            <img src="./images/bookmark.png" alt="" style={{ width: "60%", height: "40%", cursor: "pointer" }}/>
                            <button class="btn btn-primary" style={{ display: "none" }}></button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-7">
                    <Pantry recipeImg={recipeImg} recipeInfo={recipeInfo} ingredientsList={ingredientsList} 
                        directionsList={directionsList} handleDelete={handleDelete}/>
                </div>
            </div>
        </div>
    );
}
 
export default UserInput;