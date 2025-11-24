import React from 'react';

const Button = ({ children, onClick, type = 'button', disabled = false, ...rest }) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className="btn-primary"
    {...rest}
  >
    {children}
  </button>
);

export default Button;