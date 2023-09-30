import React from "react";

const IngredientList = ({ ingredients, setIngredients }) => {
  return (
    <div className="mt-4">
      <ul className="list-group list-group-flush">
        {ingredients.map((input, index) => (
          <li key={index} className="list-group-item">
            {input.ingredient} {input.amount} {input.unit}
          </li>
        ))}
      </ul>
      {ingredients.length !== 0 ? (
        <div className="mt-3">
          <button className="btn btn-danger" onClick={() => setIngredients([])}>
            Reset
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default IngredientList;
