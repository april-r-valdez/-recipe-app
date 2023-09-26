/**
 * Component
 * Allows user to input ingredients using textboxes.
 */

import React, { useState } from "react"; // import React and also specifically useState from react
import "./IngredientInput.css"; // import the styling
import TextInput from "./TextInput"; // import the TextInput component

function IngredientInput() {
  // 'ingredient' is a React state variable using the 'useState' hook provided by React.
  // 'ingredient' is initialized as this object: {name: "", amount: "", unit: ""}.
  // 'setIngredient' is the function that is used to change/update the state of 'ingredient'.
  const [ingredient, setIngredient] = useState({
    name: "",
    amount: "",
    unit: "",
  });

  // This function is passed into TextInput's <input> element.
  // This function is called whenever the user types into the <input>'s textbox.
  const handleInputChange = (e) => {
    // Whenever the user types into the <input>'s textbox,
    // it will call this function with the parameter 'e' (stands for event).
    //
    // 'e' contains the name (e.g: name, amount, unit) and the value (whatever the user inputted).
    const { name, value } = e.target;

    // Update the 'ingredient' state with the new values.
    setIngredient({
      ...ingredient,
      [name]: value,
    });
  };

  return (
    <>
      <TextInput
        label="Enter an Ingredient"
        placeholder="ex: eggs, milk..."
        type="text"
        name="name"
        value={ingredient.name}
        handleChange={handleInputChange}
      />
      <div className="ingredient-input-sub-container">
        <TextInput
          label="amount"
          placeholder="ex: 10..."
          type="number"
          name="amount"
          value={ingredient.amount}
          handleChange={handleInputChange}
        />
        <TextInput
          label="unit"
          placeholder="ex: lb, oz..."
          type="text"
          name="unit"
          value={ingredient.unit}
          handleChange={handleInputChange}
        />
      </div>
    </>
  );
}

export default IngredientInput;
