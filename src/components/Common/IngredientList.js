import React from "react";

function IngredientList({ ingredients }) {
  return (
    <div>
      <h2>Pantry:</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.amount} {ingredient.unit} {ingredient.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IngredientList;
