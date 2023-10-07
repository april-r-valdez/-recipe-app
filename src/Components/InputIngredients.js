import React, { useState } from 'react';
import IngredientsList from './IngredientsList';

const IngredientsInput = () => {

    const [newName, setnewName] = useState("");
    const [newMeasurement, setnewMeasurement] = useState("");
    const [Units, setUnits] = useState();
    const [AllIngredients, setAllIngredients] = useState([]);

    const handleAdd = () => {
      let newIngredient = {
        amount: newMeasurement,
        name: newName
      }

      let updateIngredientsArr =[...AllIngredients];
      updateIngredientsArr.push(newIngredient);
      setAllIngredients(updateIngredientsArr);

    }
    return (
      <>
        <div className="container-sm">
          <p className="text-start h4">Add ingreidents to your pantry.</p>
          <div className="container-sm">
            <div className="input-group mb-3">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Units
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Imperial
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Metric
                  </a>
                </li>
              </ul>

              <input
                type="text"
                value={newMeasurement}
                placeholder="Measurement"
                aria-label="Measurement"
                className="form-control"
                onChange={(e) => setnewMeasurement(e.target.value)}
              />
              <input
                type="text"
                value={newName}
                placeholder="Add ingredient"
                aria-label="Last name"
                className="form-control w-50"
                onChange={(e) => setnewName(e.target.value)}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={handleAdd}
              >
                Add
              </button>
            </div>
          </div>
          <IngredientsList ingredients = {AllIngredients}/>
        </div>
      </>
    );
}
 
export default IngredientsInput;