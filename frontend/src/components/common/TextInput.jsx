import React from 'react';

const TextInput = ({ label, value, onChange, ...rest }) => (
  <div className="text-input-group">
    {label && <label>{label}</label>}
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="text-input"
      {...rest}
    />
  </div>
);

export default TextInput;