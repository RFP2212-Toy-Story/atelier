import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  background-color: white;
  border: 2px solid rgb(240, 240, 240);
  border-radius: 12px;
  padding: 1rem;
  position: absolute;
  width: 600px;
  top: 50%;
  /* left: calc(50% - 125px); */
  /* bottom: 100px;
  right: 100px; */
  left: 50%;
  margin: auto;
  inset: 0;
  /* height: 200px; */
`;

export default function Modal({ children, isOpen, onClose }) {
  return (
    isOpen && createPortal(
      <Wrapper>
        <button type="button" onClick={onClose}>X</button>
        {children}
      </Wrapper>,
      document.body
    )
  );
}
