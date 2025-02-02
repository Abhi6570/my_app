import React from 'react';

const InputField = ({ label, placeholder }) => {
  return (
    <div className="input-field">
      <label>{label}:</label>
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default InputField;
