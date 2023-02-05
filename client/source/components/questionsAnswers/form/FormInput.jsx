import React from 'react';
import styled from 'styled-components';

const FormInput = function CreateFormInput({
  name, value, labelText, placeholder, onChange, disclaimerText, maxLength = '60', type = 'text'
}) {
  return (
    <>
      <label htmlFor={name}>{labelText}
        <Input
          type={type}
          name={name}
          id={name}
          value={value}
          maxLength={maxLength}
          placeholder={placeholder}
          onChange={onChange}
          cols="25"
        />
      </label>
      {disclaimerText && (<Paragraph>{disclaimerText}</Paragraph>)}
    </>
  );
};

const Input = styled.input`
  width: 300px;
`;

const Paragraph = styled.p`
  font-size: 75%;
`;

export default FormInput;
