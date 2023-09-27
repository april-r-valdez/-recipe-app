import React, { useState } from "react";
import "./TextInput.css";

function TextInput({ label, placeholder, type, name, value, handleChange }) {
  return (
    <div>
      <label htmlFor="inputText">{label}</label>
      <input
        className="input"
        type={type}
        id="inputText"
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default TextInput;
