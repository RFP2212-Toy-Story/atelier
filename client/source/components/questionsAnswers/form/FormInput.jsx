import React from 'react';

const FormInput = function CreateFormInput({
  name, value, labelText, placeholder, onChange, disclaimerText, maxLength = '60', type = 'text'
}) {
  return (
    <>
      <label htmlFor={name}>{labelText}
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          maxLength={maxLength}
          placeholder={placeholder}
          onChange={onChange}
        />
      </label>
      {disclaimerText && (<p>{disclaimerText}</p>)}
    </>
  );
};

export default FormInput;
