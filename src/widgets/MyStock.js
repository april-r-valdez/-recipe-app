import React, { useState, useEffect } from 'react';
import { useAuth } from '../firebase';
import UploadPantry from '../components/Pantry/UploadPantry';
import ShoppingList from '../components/Utils/ShoppingList/ShoppingList';

const units = ['','teaspoons',"tablespoons","pounds",
      'fluid oz',"cups","pints","quarts","gallons"]

const MyStock = () => {

    const [newName, setnewName] = useState("");
    const [newMeasurement, setnewMeasurement] = useState("");
    const [Units, setUnits] = useState();
    const [AllIngredients, setAllIngredients] = useState([]);

    // const [userID, setUserID] = useState(null);
    const currentUser = useAuth();
    // useState(()=>{ const unsubscribe = auth.onAuthStateChanged(user => { if (user) setUserID(user.uid) }); }, []);

    const renderIngredient = (ingredient, index) =>{
      return(
        <tr key = {index} onClick={()=>handleRemove(ingredient.name)}>
          <td>{ingredient.unit}</td>
          <td>{ingredient.amount}</td>
          <td>{ingredient.name}</td>
        </tr>
      )
    }

    const handleAdd = () => {
      let newIngredient = {
        unit: Units,
        amount: newMeasurement,
        name: newName
      }
      let updateIngredientsArr =[...AllIngredients];
      updateIngredientsArr.push(newIngredient);
      setAllIngredients(updateIngredientsArr);
    }
    const handleRemove = (nameToBeRemoved) => {
      const updatedIngredientsArr = AllIngredients.filter(ingredient => ingredient.name != nameToBeRemoved);
      setAllIngredients(updatedIngredientsArr);
    }


    const [showShoppingList, setShowShoppingList] = useState(false);
    const handleShowShoppingList = () => {
      if (currentUser) setShowShoppingList(true);
    };

    return (
      <>
      {currentUser ? (
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
                { Units ||"Units"}
              </button>
              <ul className="dropdown-menu" >
                {units.map((unit) => (
                  <li onClick={(e) => setUnits(unit)}>
                    <a className="dropdown-item" >
                      {unit}
                    </a>
                  </li>
                ))}
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

          <table className="table table-hover">
            <thead>
              <tr>
              <th scope="col">Unit</th>
                <th scope="col">Amount</th>
                <th scope="col">Name</th>
              </tr>
            </thead>
            <tbody>{AllIngredients.map(renderIngredient)}</tbody>
          </table>
        </div>
        <UploadPantry
          ingredients={AllIngredients}
          setIngredients={setAllIngredients}
          userID={currentUser.uid}
        />

        <button
          className="btn btn-secondary mt-2"
          type="button"
          onClick={handleShowShoppingList}
        >
          Show Shopping List
        </button>
        {showShoppingList && <ShoppingList userID={currentUser.uid} />}
        </>
      ):(<div>Loading</div>)
      }
      </>
    );
}
 
export default MyStock;