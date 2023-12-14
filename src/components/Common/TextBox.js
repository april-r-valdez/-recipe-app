import React, { useState } from "react";
import IngredientList from "../IngredientList";

const TextBox = () => {
  const [userInput, setUserInput] = useState({
    ingredient: "",
    amount: "",
    unit: "",
  });

  const [ingredients, setIngredients] = useState([]);

  const handleInputChange = (event) => {
    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value,
    });
  };

  // this function call addIngredient() to add user ingredient to array ingredients
  const handleFormSubmit = (event) => {
    event.preventDefault();
    addIngredient();
    // empty the fields in the form after inputs are saved
    setUserInput({
      ingredient: "",
      amount: "",
      unit: "",
    });
  };

  const addIngredient = () => {
    if (userInput.ingredient.trim() !== "") {
      setIngredients([...ingredients, userInput]);
    }
  };

  const deleteIngredient = (index) => {
    const updatedIngredient = [...ingredients];
    updatedIngredient.splice(index, 1);
    setIngredients(updatedIngredient);
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleFormSubmit}>
        <div className="input-group mt-2 mb-3">
          <label className="input-group-text" htmlFor="ingredient">
            Ingredient
          </label>
          <input
            className="form-control col-sm-6"
            required
            type="text"
            id="ingredient"
            name="ingredient"
            value={userInput.ingredient}
            onChange={handleInputChange}
            placeholder="Enter ingredient"
          ></input>
        </div>
        <div className="input-group mt-2 mb-3">
          <label className="input-group-text" htmlFor="amount">
            Amount
          </label>
          <input
            className="form-control"
            type="text"
            id="amount"
            name="amount"
            value={userInput.amount}
            onChange={handleInputChange}
            placeholder="Enter amount"
          ></input>
        </div>
        <div className="input-group mt-2 mb-3">
          <label className="input-group-text" htmlFor="unit">
            Unit
          </label>
          <input
            className="form-control"
            type="text"
            id="unit"
            name="unit"
            value={userInput.unit}
            onChange={handleInputChange}
            placeholder="Enter unit"
          ></input>
        </div>
        <div className="mt-3">
          <button className="btn btn-primary" type="submit">
            Add
          </button>
        </div>
      </form>
      <IngredientList
        ingredients={ingredients}
        deleteIngredient={deleteIngredient}
      />
    </div>
  );
};

export default TextBox;
