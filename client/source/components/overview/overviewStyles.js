import styled from 'styled-components';

const ZoomedPhotoDiv = styled.div`
  border: 4px solid ${(props) => `${props.color}`};
  padding: 20px;
  background-color: ${(props) => `${props.color}`};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 201;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #101010;
  opacity: 0.5;
  z-index: 101;
`;

export {
  Overlay,
  ZoomedPhotoDiv
};
