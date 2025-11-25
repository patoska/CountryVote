const TextInput = ({ name, placeholder, value, onChange, error, ...rest }) => (
  <div className="text-input-group">
    <input
      name={name}
      type="text"
      value={value}
      onChange={onChange}
      className={`text-input ${error ? 'error' : ''}`}
      placeholder={placeholder}
      autoComplete="on"
      {...rest}
    />
    <div className="error">{error}</div>
  </div>
);

export default TextInput;
