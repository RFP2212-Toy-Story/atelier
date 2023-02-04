import React from 'react';

const FormTextarea = function CreateFormTextarea({
  labelText, name, value, placeholder, onChange, disclaimerText, maxLength = '1000'
}) {
  return (
    <>
      <label htmlFor={name}>{labelText}
        <textarea
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={onChange}
        />
      </label>
      {disclaimerText && (<p>{disclaimerText}</p>)}
    </>
  );
};

export default FormTextarea;
