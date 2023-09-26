import React, { useState } from "react";
import "./TextInput.css";

function TextInput({ label, placeholder, type }) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <label htmlFor="inputText">{label}</label>
      <input
        className="input"
        type={type}
        id="inputText"
        value={text}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default TextInput;
