import React from 'react';
import styled from 'styled-components';

const FormTextarea = function CreateFormTextarea({
  labelText, name, value, placeholder, onChange, disclaimerText, maxLength = '1000'
}) {
  return (
    <div>
      <label htmlFor={name}>{labelText}
        <Textarea
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
    </div>
  );
};

const Textarea = styled.textarea`
  font-family: inherit;
  width: 100%;
  padding: 8px;
`;

const Paragraph = styled.p`
  font-size: 75%;
  margin-top: 0;
`;

export default FormTextarea;
