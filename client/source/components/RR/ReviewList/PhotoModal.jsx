import React from 'react';
import styled from 'styled-components';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const PhotoModal = function PhotoModal({ photo, onClose }) {
  return (
    <ModalOverlay>
      <Wrapper>
        <ModalInner>
          <ImageContainer>
            <img
              src={photo.url}
              alt="Enlarged"
            />
          </ImageContainer>
          <CloseButton type="button">
            <IoIosCloseCircleOutline onClick={onClose} />
          </CloseButton>
        </ModalInner>
      </Wrapper>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1010;
  justify-content: center;
  align-items: flex-start;
  overflow: auto;
`;

const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  border-radius: 12px;
  background-color: #FFFBEA;
  margin-top: 64px;
  margin-bottom: 64px;
  max-width: 50%;
  z-index: 1010;
  padding: 24px;
  `;

const ImageContainer = styled.div`
  img {
    max-width: 100%;
    border-radius: 12px;
    object-fit: cover;
    padding: 0.5em;
  }
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


export default PhotoModal;
