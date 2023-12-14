import React, { useState } from "react";

function TextInput({
  label,
  placeholder,
  type,
  value,
  name,
  handleChange,
  onKeyDown,
}) {
  return (
    <div>
      <label htmlFor="inputText">{label}</label>
      <input
        type={type}
        id="inputText"
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}

export default TextInput;
