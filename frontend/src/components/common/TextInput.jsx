import React from 'react';

const TextInput = ({ name, placeholder, value, onChange, ...rest }) => (
  <div className="text-input-group">
    <input
      name={name}
      type="text"
      value={value}
      onChange={onChange}
      className="text-input"
      placeholder={placeholder}
      autocomplete="on"
      {...rest}
    />
  </div>
);

export default TextInput;
