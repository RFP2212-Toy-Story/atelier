import React from 'react';
import styled from 'styled-components';

  <RadioInput
    labelText="Do you recommend this product? *"
    type="radio"
    name="recommended"
    value={formInput.recommended}
  />;

const RadioInput = function RadioInput({
  name, value, option, labelText, id = '', onChange, required = true, type = 'radio'
}) {
  return (
    <div>
      <Label htmlFor={name}>{labelText}</Label>
      {id && (<SubLabel>{option[0]}</SubLabel>)}
      <Input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        cols="25"
      />
    </div>
  );
};

const Label = styled.label`
  margin-bottom: 2px;
  display: block;
`;

const SubLabel = styled.sublabel`

`;

const Input = styled.input`
  display: block;
  font-family: inherit;
  width: 100%;
  padding: 4px;
`;

export default RadioInput;
