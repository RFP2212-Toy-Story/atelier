import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  background-color: white;
  border: 2px solid rgb(240, 240, 240);
  border-radius: 12px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  width: 600px;
  max-width: 100%;
  height: 500px;
  max-height: 100%;
  z-index: 1010;
`;

const ModalInner = styled.div`
/* cover the modal */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  /* spacing as needed */
  padding: 20px 50px 20px 20px;
  /* let it scroll */
  overflow: auto;
`;

const ModalOverlay = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

const CloseButton = styled.button`
  position: absolute;
  /* don't need to go crazy with z-index here, just sits over .modal-guts */
  /* z-index: 1; */
  cursor: pointer;
  top: 10px;

  /* needs to look OK with or without scrollbar */
  right: 20px;

  border: 0;
  font-size: 1.3rem;
`;

export default function Modal({ children, isOpen, onClose }) {
  return (
    isOpen && createPortal(
      <>
        <ModalOverlay />
        <Wrapper>
          <ModalInner>
            <CloseButton type="button" onClick={onClose}>X</CloseButton>
            {children}
          </ModalInner>
        </Wrapper>
      </>,
      document.body
    )
  );
}
