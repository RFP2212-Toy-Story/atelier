import React from 'react';
import styled from 'styled-components';

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
          rows="5"
          cols="62"
        />
      </label>
      {disclaimerText && (<Paragraph>{disclaimerText}</Paragraph>)}
    </>
  );
};

const Paragraph = styled.p`
  font-size: 75%;
`;

export default FormTextarea;
