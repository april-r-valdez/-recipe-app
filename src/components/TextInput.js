import React, { useState } from "react";

function TextInput() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <label htmlFor="inputText">Enter an Ingredient</label>
      <input
        type="text"
        id="inputText"
        value={text}
        onChange={handleChange}
        placeholder="ex: eggs, milk..."
      />
    </div>
  );
}

export default TextInput;
