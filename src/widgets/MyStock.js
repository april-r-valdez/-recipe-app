import React, { useState } from 'react';
import UploadPantry from '../components/Pantry/UploadPantry';

const MyStock = () => {

    const [newName, setnewName] = useState("");
    const [newMeasurement, setnewMeasurement] = useState("");
    const [Units, setUnits] = useState();
    const [AllIngredients, setAllIngredients] = useState([]);

    const renderIngredient = (ingredient, index) =>{
      return(
        <tr key = {index}>
          <td>{ingredient.amount}</td>
          <td>{ingredient.name}</td>
        </tr>
      )
    }

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
          <div className="rounded-pill bg-primary-subtle mb-2">
            <label className=" fw-bold display-6 ">MY PANTRY</label>     
          </div>
          <div className="container-sm">
          <p className="text-start h5">Add ingredients to your pantry.</p>
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
        </div>
        <div className="container-sm text-center">
          <p className="h3">In Stock</p>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">Amount</th>
                <th scope="col">Name</th>
              </tr>
            </thead>
            <tbody>{AllIngredients.map(renderIngredient)}</tbody>
          </table>
        </div>
        {AllIngredients.length !== 0 && <UploadPantry ingredients={AllIngredients}/>}
      </>
    );
}
 
export default MyStock;