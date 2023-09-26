import React, { useState } from "react";

const TextBox = () => {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        name="userInput"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Enter ingredients"
      ></input>
    </div>
  );
};

export default TextBox;
