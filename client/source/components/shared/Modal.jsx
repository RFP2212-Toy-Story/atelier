// LIBRARY IMPORTS
import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const Wrapper = styled.div`
  background-color: #FFFBEA;
  border: 0.21em dotted #74AA90;
  border-radius: 12px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  width: 600px;
  max-width: 100%;
  height: 550px;
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
  padding: 24px;
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
  cursor: pointer;
  top: 10px;
  right: 20px;
  border: 0;
  font-size: 1.3rem;
  background: transparent;
`;

export default function Modal({ children, isOpen, onClose }) {
  return (
    isOpen && createPortal(
      <>
        <ModalOverlay />
        <Wrapper>
          <ModalInner>
            <CloseButton>
              <IoIosCloseCircleOutline onClick={onClose} />
            </CloseButton>
            {children}
          </ModalInner>
        </Wrapper>
      </>,
      document.body
    )
  );
}
