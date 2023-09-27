import React, { useState } from "react";

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

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="ingredient">Ingredient: </label>
          <input
            type="text"
            id="ingredient"
            name="ingredient"
            value={userInput.ingredient}
            onChange={handleInputChange}
            placeholder="Enter ingredient"
          ></input>
        </div>
        <div>
          <label htmlFor="amount">Amount: </label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={userInput.amount}
            onChange={handleInputChange}
            placeholder="Enter amount"
          ></input>
        </div>
        <div>
          <label htmlFor="unit">Unit: </label>
          <input
            type="text"
            id="unit"
            name="unit"
            value={userInput.unit}
            onChange={handleInputChange}
            placeholder="Enter unit"
          ></input>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TextBox;
