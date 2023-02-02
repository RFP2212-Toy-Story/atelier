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
  height: 600px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const CarouselWrapperDiv = styled.div`
  border: '2px solid green';
  width: 800px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const CarouselButton = styled.button`
  &:hover {
    color: green;
  }
  color: grey;
  background: none;
  border: none;
  font-size: 2rem;
  position: relative;
  width: 48px;
  height: 48px;
`;

const ThumbnailWrapperDiv = styled.div`
  &:hover {
    ::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
  }
  }
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    visibility: hidden;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 2px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.25);
  }
  direction: rtl;
  scroll-behavior: smooth;
  max-height: 420px;
  overflow: auto;
`;

const ThumbnailImage = styled.img`
  max-height: 80px;
  display: block;
  box-sizing: border-box;
  margin: 4px auto;
  background-color: ${(props) => `${props.color}`};
  padding: 6px;
  border: 2px solid ${(props) => `${props.color}`};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
              rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
              rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export {
  CarouselButton,
  CarouselWrapperDiv,
  OverlayDiv,
  PhotoBlockDiv,
  PhotoTileDiv,
  ThumbnailImage,
  ThumbnailWrapperDiv,
  ZoomedPhotoDiv
};
