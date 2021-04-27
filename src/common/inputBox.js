import React from "react";

const InputBox = ({id, label, placeholder, value, onChange, cssStyle, ...props}) => (
  <>
    <label htmlFor={id} className={cssStyle}>
      {label}
    </label>
    <input
      id={id}
      type="text"
      onChange={(e) => onChange(e.target.value)}
      value={value}
      placeholder={placeholder}
      maxLength="25"
    />
  </>
);
export default InputBox;
