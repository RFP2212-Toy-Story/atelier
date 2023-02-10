import styled from 'styled-components';

const ZoomedPhotoDiv = styled.div`
  overflow: hidden;
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
              rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset,
              rgba(0, 0, 0, 0.25) 0px 0px 2px 1px inset;
`;

const PhotoTileDiv = styled.div`
  &:hover {
    cursor: zoom-in;
    transform: scale(1.1);
  };
  position: relative;
  display: flex;
  transition: transform 1s ease-out;
  margin: 24px;
  background-color: ${(props) => `${props.color}`};
  padding: 12px;
  border: 4px solid ${(props) => `${props.color}`};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
              rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
              rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset,
              rgba(0, 0, 0, 0.25) 0px 0px 2px 1px inset;
`;

const PhotoTileInnerDiv = styled.div`
  display: flex;
  padding: 16px;
  background-color: white;
  box-shadow: rgb(60, 60, 60, 0.5) 1px 1px 2px 1px inset,
              rgba(60, 60, 60, 0.5) -1px -1px 2px 1px inset;
`;

const ZoomedPhotoTileImage = styled.img`
  &:hover {
    cursor: zoom-in;
  }
  ${(props) => (props.clicked ? `&:hover {
    cursor: crosshair;
    transform: scale(4.0);
  };` : null)}
  transition: transform 2s ease-in-out;
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 2px;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
              rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
`;

const PhotoTileImage = styled.img`
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 2px;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
              rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
`;

const OverlayDiv = styled.div`
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.50;
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
  height: 60vh;
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
  overflow-x: hidden;
  direction: rtl;
  scroll-behavior: smooth;
  max-height: 460px;
  overflow-y: auto;
  width: 12vw;

  // This is a hacky way to get scrollbar transitions
  color: rgba(0, 0, 0, 0);
  transition: color 0.3s;
  ::-webkit-scrollbar {
    width: 14px;
  }
  ::-webkit-scrollbar-track {
    visibility: hidden;
  }
  ::-webkit-scrollbar-thumb {
    background-clip: content-box;
    border: 4px solid transparent;
    border-radius: 7px;
    box-shadow: inset 0 0 0 10px;
  }
  ::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: none;
  }
  &:hover {
    color: rgba(246, 222, 182, 0.5);
  }
`;

const ThumbnailImage = styled.img`
  &:hover {
    transform: scale(1.1);
  }
  transition: transform 0.2s;
  max-width: 90%;
  max-height: 80px;
  display: block;
  box-sizing: border-box;
  margin: 4px auto;
  border: 2px solid rgba(128, 128, 128, 0.5);
  padding: 6px;
  box-shadow: rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset,
              rgba(128, 128, 128, 1) 0px 0px 1px 1px inset;
`;

const StyleButtonImage = styled.img`
  &:hover {
    background-color: #E07A5F;
    transform: scale(1.1);
  }
  cursor: pointer;
  transition: transform 0.25s;
  border: 2px solid ${(props) => (props.selected ? '#E07A5F' : 'transparent')};
  border-radius: 50%;
  display: inline;
  margin: 0.1rem;
  object-fit: cover;
  width: 60px;
  height: 60px;
  box-shadow: rgba(0, 0, 0, 0.50) 2px 3px 6px -2px,
              rgba(10, 30, 60, 0.20) 3px 3px 9px 2px;
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
  border-radius: 1rem 0.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
              rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
              rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const CheckoutButton = styled.button`
  &:hover {
    background-color: #E07A5F;
    color: white;
    transform: scale(1.1);
  }
  cursor: pointer;
  background-color: #F6DEB6;
  font-size: 1rem;
  border: none;
  border-radius: 1rem;
  font-weight: bold;
  transition: transform 0.25s;
  box-shadow: rgba(0, 0, 0, 0.50) 2px 3px 6px -2px,
              rgba(10, 30, 60, 0.20) 3px 3px 9px 2px;
`;

export {
  CarouselButton,
  CarouselWrapperDiv,
  CheckoutButton,
  OverlayDiv,
  PhotoBlockDiv,
  PhotoTileDiv,
  PhotoTileInnerDiv,
  PhotoTileImage,
  ProductInfo,
  ProductText,
  StyleButtonImage,
  ThumbnailImage,
  ThumbnailWrapperDiv,
  ZoomedPhotoDiv,
  ZoomedPhotoTileImage
};
