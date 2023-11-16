import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SiAddthis } from "react-icons/si";

function InputIngredient () {

    const [ingredients, setIngredientList] = useState([
       'Sugar',
       'Salt',
       'Oil',
    ]);

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isDairyFree, setIsDairyFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);

    const [newItem, setNewItem] = useState('');
    const [isHovered, setIsHovered] = useState(false);

    const navigate = useNavigate();

    const removeItem = (idx) => {
        const updatedItems = [...ingredients];
        updatedItems.splice(idx, 1);
        setIngredientList(updatedItems);
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        const restrictInput = inputValue.replace(/[^A-Za-z]/g, '');
        const capitalInputValue = restrictInput.charAt(0).toUpperCase() + restrictInput.slice(1).toLowerCase();
        setNewItem(capitalInputValue);
    };
    
    const addItem = () => {
        if (newItem.trim() !== '') {
            setIngredientList([...ingredients, newItem]);
            setNewItem('');
        }
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
        navigate(`/searchByIngredients?ingredients=${ingredients}&glutenFree=${isGlutenFree}&dairyFree=${isDairyFree}&vegan=${isVegan}`)
    };
    
    const handleExternalSearch = () => {
        navigate(`/externalSearch/${ingredients}`);
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
                                    <div class="rounded-pill bg-warning-subtle p-2 ">
                                        <div class="form-check">                                
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="glutenFreeCheckbox" 
                                            id="glutenFreeCheckbox" 
                                            checked={isGlutenFree} 
                                            onChange={handleGlutenFreeChange}/>
                                        <label class="form-check-label" for="glutenFreeCheckbox">Gluten free</label>
                                        </div>
                                    </div>
                                
                                </div>
                                <div className="col">
                                    <div class="rounded-pill bg-warning-subtle p-2"> 
                                        <div class="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="dairyFreeCheckbox" 
                                            id="dairyFreeCheckbox"
                                            checked={isDairyFree}
                                            onChange={handleDairyChange}/>
                                        <label className="form-check-label" for="dairyFreeCheckbox">Dairy free</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="rounded-pill bg-warning-subtle p-2">
                                        <div class="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            name="veganCheckbox" 
                                            id="veganCheckbox" 
                                            checked={isVegan} 
                                            onChange={handleVeganChange}/>
                                        <label className="form-check-label" for="veganCheckbox"> Vegan</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="container">
                        <label className="form-label">Ingredient list <span className="badge text-bg-warning ">{ingredients.length}</span></label>
                            <div className="row  mb-3">
                                
                                <div className="list-group list-group-flush" style={{ maxHeight: '200px', overflowY: 'scroll' }}>
                                    {ingredients.map((ingredient, index) => (
                                        <ul className="list-group list-group-flush">
                                             <li key={index} 
                                                className="list-group-item d-flex justify-content-between align-items-center">
                                                {ingredient}
                                                <button type="button" className="close btn btn-sm" aria-label="Close" onClick={() => removeItem(index)}>
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

        </div>
    )
}

export default InputIngredient;