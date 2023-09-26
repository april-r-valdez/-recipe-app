import React, { useState } from "react";
import "./IngredientInput.css";
import TextInput from "./TextInput";

function IngredientInput() {
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
