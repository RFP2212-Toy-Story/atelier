import React from 'react';
import styled from 'styled-components';

const FormInput = function CreateFormInput({
  name, value, labelText, placeholder, onChange, disclaimerText, maxLength = '60', type = 'text'
}) {
  return (
    <div>
      <Label htmlFor={name}>{labelText}</Label>
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
