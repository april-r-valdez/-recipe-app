/**
 * Component
 * Allows user to input ingredients using textboxes.
 */

import React, { useState } from "react";
//import "./IngredientInput.css";
import TextInput from "../../components/Common/TextInput"
import IngredientList from "../../components/Common/IngredientList";

function IngredientInput() {
  // ingredient
  const [ingredient, setIngredient] = useState({
    name: "",
    amount: "",
    unit: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setIngredient({
      ...ingredient,
      [name]: value,
    });
  };

  // ingredients
  const [ingredients, setIngredients] = useState([]);
  const handleSaveIngredient = () => {
    setIngredients([...ingredients, ingredient]);

    setIngredient({
      name: "",
      amount: "",
      unit: "",
    });

    setShowSubContainer(false);
  };

  // input dynamics
  const [showSubContainer, setShowSubContainer] = useState(false);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setShowSubContainer(true);
    }
  };

  return (
    <>
      <IngredientList ingredients={ingredients} />

      <TextInput
        label="Enter an Ingredient"
        placeholder="ex: eggs, milk..."
        type="text"
        name="name"
        value={ingredient.name}
        handleChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />

      {showSubContainer && (
        <div className="ingredient-input-sub-container">
          <TextInput
            label="amount"
            placeholder="ex: 10..."
            type="number"
            name="amount"
            value={ingredient.amount}
            handleChange={handleInputChange}
            data-testid="amount"
          />
          <TextInput
            label="unit"
            placeholder="ex: lb, oz..."
            type="text"
            name="unit"
            value={ingredient.unit}
            handleChange={handleInputChange}
          />
          <button onClick={handleSaveIngredient}>Add {ingredient.name}</button>
        </div>
      )}
    </>
  );
}

export default IngredientInput;
