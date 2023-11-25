import { useState } from 'react'
import Ingredient from '../components/Common/Ingredient';
import Direction from '../components/Common/Direction';
import Pantry from '../components/Pantry/Pantry';
import Metadata from '../components/Common/Metadata';
import saveRecipeToFirebase from '../components/Utils/SaveRecipe';
import { useAuth, useUserInfo } from '../firebase';
import { uploadImageFileToFirebase } from '../components/Utils/UploadImage';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const  UserInput = () => {

    // get the current login user
    const navigate = useNavigate();
    const curUser = useAuth();
    const [userInfo, setUserInfo] = useState(null);
    useUserInfo(curUser, setUserInfo);
    
    // useState hook updates variables that store ingredient inputs
    const [inputs, setIngredients] = useState({
        // default values set
        amount:'',
        units:'',
        ingredient:'',
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

    const [saveStatus, setSaveStatus] = useState(false);
    
    // Modal component
    const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => {
        setShowModal(false);
    }

    const reloadPage = () => {
        window.location.reload();
    }

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

    // handle save recipe
    const handleSaveRecipe = () => {

        if (!curUser) {
            navigate('/login-page');
            return;
        }
       
        if (recipeInfo && ingredientsList.length > 0 && directionsList.length > 0) {
            // extract recipe information
            const recipeName = recipeInfo.name;
            const servings = parseInt(recipeInfo.servingSize, 10);
            const cookTime = parseInt(recipeInfo.prepTime, 10) + parseInt(recipeInfo.cookTime, 10);
            const ingredients = ingredientsList.map((input) => input.ingredient);
            const ingredientDetails = ingredientsList.map((input) => (input.amount + ' ' + input.units + ' ' + input.ingredient));
            const directions = directionsList.map(data => data.direction);
            const imageLocation = recipeImg ? ('RecipeImages/' + recipeImg?.name) : 'RecipeImages/default_image.png';
            const authorName = userInfo ? (userInfo.userName ? userInfo.userName : userInfo.email) : "";
            const isVegan = false;  // default to false
            const isGlutenFree = false; // default to false
            const isDairyFree = false;  // default to false
            
            // save recipe to firestore
            saveRecipeToFirebase(recipeName, servings, cookTime, ingredients, ingredientDetails, directions, imageLocation, authorName, isVegan, isDairyFree, isGlutenFree);
            
            // // upload image to firebase storage if user provides one
            if (recipeImg) {
                uploadImageFileToFirebase(recipeImg, imageLocation);
            }

            // set saveStatus
            setSaveStatus(true);
        }

        // open pop up modal
        setShowModal(true);

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
                                <img src="upload-img.png" alt="" style={{ width: "75%", height: "75%", objectFit: "cover", cursor: "pointer" }}/>
                                <input class="form-control" type="file" id="formFile" style={{ display: "none" }} onChange={handleImageChange}/>
                            </label>
                        </div>
                        <div className="col-4 mb-3 ms-auto">
                            <p className="h4">Save Recipe</p><br></br>
                            <label htmlFor='formButton' style={{ cursor: "pointer" }}>
                                <img src="bookmark.png" alt="" style={{ width: "60%", height: "40%", cursor: "pointer" }}/>
                                <input type='button' id='formButton' style={{ display: "none" }} onClick={handleSaveRecipe}/>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-7">
                    <Pantry recipeImg={recipeImg} recipeInfo={recipeInfo} ingredientsList={ingredientsList} 
                        directionsList={directionsList} handleDelete={handleDelete}/>
                </div>
            </div>

            {/* Successfully save modal */}
            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body style={{display: "flex", justifyContent:"center", alignItems:"center"}}>
                    {
                        saveStatus === true ? (<p>Your recipe has been saved!</p>) : 
                                             (<p>Error: missing recipe information!</p>)
                    }
                </Modal.Body>
                <Modal.Footer style={{display: "flex", justifyContent:"center", alignItems:"center"}}>
                    <button 
                    type='button' 
                    className='btn btn-success' onClick={reloadPage}>Add another recipe</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
 
export default UserInput;