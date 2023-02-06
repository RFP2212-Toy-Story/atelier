import React from 'react';
import styled from 'styled-components';

const ModalFormTitle = function CreateModalTitleComponent({ title, subtitle }) {
  return (
    <>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </>
  );
};

const Title = styled.h2`
  margin: 0;
  margin-bottom: 4px;
  border-bottom: 2px solid currentColor;
`;

const Subtitle = styled.h3`
  margin: 0;
  margin-bottom: 20px;
  font-weight: 400;
`;

export default ModalFormTitle;
