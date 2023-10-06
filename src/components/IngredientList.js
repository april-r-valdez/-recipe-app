import React from "react";

const IngredientList = ({ ingredients, deleteIngredient }) => {
  return (
    <div className="mt-4">
      <ul className="list-group list-group-flush">
        {ingredients.map((input, index) => (
          <li
            key={index}
            data-testid="ingredients-list"
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {input.ingredient} {input.amount} {input.unit}
            <button
              type="button"
              className="btn btn-close"
              aria-label="Close"
              onClick={() => deleteIngredient(index)}
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
