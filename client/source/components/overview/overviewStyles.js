import styled from 'styled-components';

const ZoomedPhotoDiv = styled.div`
  &:hover {
    cursor: zoom-out;
  };
  border: 6px solid ${(props) => `${props.color}`};
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
    cursor: zoom-in;
    transform: scale(1.2);
  };
  transition: transform 1s ease-out;
  margin: 20px;
  background-color: ${(props) => `${props.color}`};
  padding: 10px;
  border: 4px solid ${(props) => `${props.color}`};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
              rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
              rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const OverlayDiv = styled.div`
  backdrop-filter: blur(10px);
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

const CarouselWrapperDiv = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const CarouselButton = styled.button`
  &:hover {
    color: #E07A5F;
    transform: scale(1.1);
    background-color: transparent;
  }
  transition: transform 0.2s;
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
  overflow-x: hidden;
  direction: rtl;
  scroll-behavior: smooth;
  max-height: 420px;
  overflow-y: auto;
`;

const ThumbnailImage = styled.img`
  &:hover {
    transform: scale(1.1);
  }
  transition: transform 0.2s;
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

const StyleButton = styled.button`
  &:hover {
    color: white;
    background-color: #E07A5F;
    transform: scale(1.1);
  }
  transition: transform 0.2s;
  background-color: ${(props) => (props.selected ? '#E07A5F' : 'transparent')};
  border: 2px solid ${(props) => (props.selected ? '#E07A5F' : 'transparent')};
  border-radius: 4px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`;

const ProductText = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
  background-color: #F6DEB6;
  padding: 10px;
  border: 4px solid #F6DEB6;
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
  ProductInfo,
  ProductText,
  StyleButton,
  ThumbnailImage,
  ThumbnailWrapperDiv,
  ZoomedPhotoDiv
};
