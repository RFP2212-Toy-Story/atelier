import React from 'react';
import styled from 'styled-components';

const FormInput = function CreateFormInput({
  name, value, labelText, placeholder, onChange, disclaimerText, minLength = '0', maxLength = '60', required = false, type = 'text'
}) {
  return (
    <div>
      <Label htmlFor={name}>{labelText}</Label>
      <Input
        type={type}
        name={name}
        id={name}
        value={value}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        cols="25"
        required
      />
      {disclaimerText && (<Paragraph>{disclaimerText}</Paragraph>)}
    </div>
  );
};

const Label = styled.label`
  margin-bottom: 2px;
  display: block;
`;

const Input = styled.input`
  display: block;
  font-family: inherit;
  width: 100%;
  padding: 4px;
`;

const Paragraph = styled.p`
  font-size: 75%;
  margin-top: 4px;
  color: #7b7366;
`;

export default FormInput;
