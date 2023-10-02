import { useState } from "react";


function InputIngredient () {

    const [ingredients, setIngredientList] = useState([
       'Sugar',
       'Salt',
       'Oil',
    ]);

    const [newItem, setNewItem] = useState('');

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

    return (
        <div className="card text-start border-light mb-3">
            <div className="card-header text-bg-dark text-center fw-bolder">GENERATE RECIEPE</div>
            <div className="card-body">
                <h6 className="card-title">CUSTOM INGREDIENTS</h6>
                <div className="row g-1">
                    <div className="col-md">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Add ingredient" aria-label="New Ingredient" aria-describedby="button-addon2" onChange={handleInputChange} value={newItem} onKeyUp={handleKeyUp}/>
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addItem}>ADD</button>
                        </div>
                    </div> 
                </div>
                <div className="row g-1">
                    <div className="col-md">
                        <div className="card">
                            <div className="card-header text-center"> Ingredient List <span className="badge text-bg-secondary ">{ingredients.length}</span></div>
                            <div className="card-body">
                                <div className="list-group list-group-flush" style={{ maxHeight: '300px', overflowY: 'scroll' }}>
                                    {ingredients.map((ingredient, index) => (
                                        <li key={index} 
                                        className="list-group-item d-flex justify-content-between align-items-center">
                                            {ingredient}
                                            <button type="button" className="btn-close" aria-label="Close" onClick={() => removeItem(index)}></button>
                                        </li>
                                    ))}
                                </div>
                                <div className="d-grid gap-2 col-2 mx-auto" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-secondary" onClick={resetIngredientList}>RESET</button>                                   
                                </div>                            
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary">SUBMIT</button>                                   
            </div> 
        </div>
    )
}

export default InputIngredient;