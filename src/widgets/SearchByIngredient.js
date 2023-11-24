import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SiAddthis } from "react-icons/si";
import { IoCamera } from "react-icons/io5";
import { FcCameraIdentification } from "react-icons/fc";
import ModalComponent from "../components/Utils/ModalComponent";
import CameraModule from "./CameraModule";

function InputIngredient () {

    const [ingredients, setIngredientList] = useState([
        { id: 1, name: 'Sugar' },
        { id: 2, name: 'Salt' },
        { id: 3, name: 'Oil' },
    ]);

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isDairyFree, setIsDairyFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);

    const [newItem, setNewItem] = useState('');
    const [isHovered, setIsHovered] = useState(false);

    const [showCameraModal, setShowCameraModal] = useState(false);

    const navigate = useNavigate();

    const removeItem = (id) => {
        const updatedItems = ingredients.filter((ingredient) => ingredient.id !== id);
        setIngredientList(updatedItems);
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        // Include space in the character class, and alphaets
        const restrictInput = inputValue.replace(/[^A-Za-z ]/g, ''); 
        const capitalInputValue = restrictInput
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(' ');
      
        setNewItem(capitalInputValue);
    };
    
    const addItem = () => {
        // Prevent adding empty items
        if (newItem.trim() === '') {
          return; 
        }
        
         // Increase id
        const newIngredient = {
          id: ingredients.length + 1,
          name: newItem,
        };
      
        setIngredientList([...ingredients, newIngredient]);
        setNewItem('');
    };

    const resetIngredientList = () => {
        setIngredientList([]);
    };

    const handleKeyUp = (e) => {
        if (e.key === 'Enter') {
            addItem();
        }
    };

    const handleSearch = () => {
        const ingredientNames = ingredients.map((ingredient) => ingredient.name).join(',');
        navigate(`/searchByIngredients?searchType=${'byIngredient'}&ingredients=${ingredientNames}&glutenFree=${isGlutenFree}&dairyFree=${isDairyFree}&vegan=${isVegan}`)
    };
    
    const handleExternalSearch = () => {
        const ingredientNames = ingredients.map((ingredient) => ingredient.name).join(',');
        navigate(`/externalSearch/${ingredientNames}`);
    };
    
    
    const handleHoverEnter = () => {
        setIsHovered(true);
    };
    
    const handleHoverLeave = () => {
        setIsHovered(false);
    };

    const handleGlutenFreeChange = (event) => {
        setIsGlutenFree(event.target.checked);
    };
    
    const handleDairyChange = (event) => {
        setIsDairyFree(event.target.checked);
    };
    
    const handleVeganChange = (event) => {
        setIsVegan(event.target.checked);
    };

    const handleModalOpen = () => {
        setShowCameraModal(true);
    };

    const handleModalClose = () => {
        setShowCameraModal(false);
    };

    const modalTitle = (
        <FcCameraIdentification />    
    );
    const modalBody = (
        <CameraModule isOpen={showCameraModal} onClose={handleModalClose} />      
    );
    const modalFooter = (
        <>
        <button type="button" className="btn btn-secondary" onClick={handleModalClose}>Close</button>
        </>
    );


    return (
        <div 
            className="container-fluid border-light" 
            data-bs-theme="light"
            onClick={handleHoverEnter}
            onMouseLeave={handleHoverLeave}
            >
            <div className="row">
                <label className="fw-medium text-warning text-start">SEARCH RECIPE</label>
                <div className="input-group mb-3" >
                    <span className="input-group-text fw-medium text-warning" id="basic-addon3">USING</span>
                    <input 
                        type="text" className="form-control" 
                        placeholder="ingredients" 
                        aria-label="New Ingredient" 
                        aria-describedby="button-addon2" 
                        onChange={handleInputChange}
                        value={newItem} 
                        onKeyUp={handleKeyUp}/>
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addItem}><SiAddthis/></button>
                </div>

            </div>
            <div className={`collapse ${isHovered ? 'show' : ''}`} id="ingredientSearchCollapse">
                <div className="row">
                    <div className="col">
                        <div className="container">
                            <div className="row">
                                <label className="form-label">Options</label>
                            </div>
                            <div className="row">
                                <div className="col">                                    
                                    <div className="rounded-pill bg-warning-subtle p-2 ">
                                        <div className="form-check">                                
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="glutenFreeCheckbox" 
                                            id="glutenFreeCheckbox" 
                                            checked={isGlutenFree} 
                                            onChange={handleGlutenFreeChange}/>
                                        <label className="form-check-label" htmlFor="glutenFreeCheckbox">Gluten free</label>
                                        </div>
                                    </div>
                                
                                </div>
                                <div className="col">
                                    <div className="rounded-pill bg-warning-subtle p-2"> 
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="dairyFreeCheckbox" 
                                            id="dairyFreeCheckbox"
                                            checked={isDairyFree}
                                            onChange={handleDairyChange}/>
                                        <label className="form-check-label" htmlFor="dairyFreeCheckbox">Dairy free</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="rounded-pill bg-warning-subtle p-2">
                                        <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="veganCheckbox" 
                                            id="veganCheckbox" 
                                            checked={isVegan} 
                                            onChange={handleVeganChange}/>
                                        <label className="form-check-label" htmlFor="veganCheckbox"> Vegan</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="container">
                            <label className="form-label d-flex justify-content-between align-items-center">
                                Ingredient list 
                                <span className="badge text-bg-warning ">{ingredients.length}</span>
                                <span className="badge text-bg-warning ">
                                    <div className="flex-shrink-0">
                                        <IoCamera style={{ fontSize: '20px'}} onClick={handleModalOpen}/>
                                    </div>
                                </span>

                            </label>
                            <div className="row  mb-3">
                               
                                <div className="list-group list-group-flush" style={{ maxHeight: '200px', overflowY: 'scroll' }}>
                                    {ingredients.map((ingredient) => (
                                        <ul className="list-group list-group-flush" key={ingredient.id}>
                                             <li className="list-group-item border-bottom d-flex justify-content-between align-items-center">
                                                {ingredient.name}
                                                <button type="button" className="close btn btn-sm" aria-label="Close" onClick={() => removeItem(ingredient.id)}>
                                                <span aria-hidden="true" className="text-dark">&times;</span>
                                                </button>
                                            </li>
                                        </ul>
                                       
                                    ))}                                    
                                </div>
                                
                            </div>
                            <div className="row  mb-3">
                                <div className="col">
                                    <div className="align-items-center">
                                        <button type="button" className="btn btn-outline-secondary" onClick={handleSearch}>SUBMIT</button>
                                        
                                        <button type="button" className="btn btn-outline-secondary gap-2" onClick={handleExternalSearch}>External Search</button>
                                       
                                        <button type="button" className="btn btn-outline-danger" onClick={resetIngredientList}>RESET</button>                                
                                    </div>
                                </div>
                                
                            </div>
                            
                            
                        </div>
                    </div>
                    
                </div>
            </div>
            <ModalComponent
                showModal={showCameraModal}
                handleClose={handleModalClose}
                modalTitle={modalTitle}
                modalBody={modalBody}
                modalFooter={modalFooter}
            />
        </div>
    )
}

export default InputIngredient;