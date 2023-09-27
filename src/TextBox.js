import React, { useState } from "react";

const TextBox = () => {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleFormSubmit = () => {
    // to be implemented
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
            value={userInput}
            onChange={handleInputChange}
            placeholder="Enter ingredients"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default TextBox;
