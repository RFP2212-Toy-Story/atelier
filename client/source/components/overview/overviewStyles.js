import styled from 'styled-components';

const ZoomedPhotoDiv = styled.div`
  &:hover {
    cursor: zoom-out;
  };
  border: 4px solid ${(props) => `${props.color}`};
  padding: 20px;
  background-color: ${(props) => `${props.color}`};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 201;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
              rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
              rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;


const PhotoTileDiv = styled.div`
  &:hover {
    border: 2px solid green;
    cursor: zoom-in;
  };
  margin: 20px;
  background-color: ${(props) => `${props.color}`};
  padding: 10px;
  border: 2px solid ${(props) => `${props.color}`};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
              rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
              rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const OverlayDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.75;
  z-index: 101;
  cursor: auto;
`;

const PhotoBlockDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export {
  OverlayDiv,
  PhotoBlockDiv,
  PhotoTileDiv,
  ZoomedPhotoDiv
};
