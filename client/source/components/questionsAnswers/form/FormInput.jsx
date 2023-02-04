import React from 'react';

const FormInput = function CreateFormInput({
  name, value, labelText, placeholder, onChange, disclaimerText, type = 'text'
}) {
  return (
    <>
      <label htmlFor={name}>{labelText}
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          maxLength="60"
          placeholder={placeholder}
          onChange={onChange}
        />
      </label>
      {disclaimerText && (<p>{disclaimerText}</p>)}
    </>
  );
};

export default FormInput;
