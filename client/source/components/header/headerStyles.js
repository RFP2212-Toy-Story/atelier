import styled, { css, keyframes } from 'styled-components';

// FRAGMENTS
const BoxShadowLarge = css`
  rgba(61, 64, 91, 0.4) 0px 5px,
  rgba(61, 64, 91, 0.3) 0px 10px,
  rgba(61, 64, 91, 0.2) 0px 15px,
  rgba(61, 64, 91, 0.1) 0px 20px,
  rgba(61, 64, 91, 0.05) 0px 25px;
`;

const BoxShadowSmall = css`
  rgba(38, 38, 61, 0.4) 0px 5px,
  rgba(38, 38, 61, 0.3) 0px 10px;
`;

const ShrinkAnimation = keyframes`
  from {
    height: 140px;
    background-color: #3D405B;
    box-shadow: ${BoxShadowLarge};
  }

  to {
    height: 80px;
    background-color: #26263D;
    box-shadow: ${BoxShadowSmall};
  }
`;

// STYLES
const FadingDiv = styled.div`
  height: 0px;
  ${(props) => {
    if (props.scrolled) {
      return css`
        visibility: hidden;\
        opacity: 0;\
        transition: visibility 1s, opacity 1s linear;`;
    }
    return '';
  }}
`;

const HeaderDiv = styled.div`
  z-index: 50;
  position: fixed;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 40px 40px 40px 40px;
  color: #FFD372;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${(props) => {
    if (props.scrolled) {
      return css`
        box-shadow: ${BoxShadowSmall};
        animation: 2s ${ShrinkAnimation};
        height: 80px;
        background-color: #26263D;
      `;
    }
    return css`
      box-shadow: ${BoxShadowLarge}
      height: 140px;
      background-color: #3D405B;
    `;
  }}
`;

const HeaderWrapperDiv = styled.div`
  height: 160px;
`;

const FontDiv = styled.div`
  // calc(minSize + (maxSize - minSize) * (100VW - minWidth) / (maxWidth - minWidth))
  font-size: 2rem;
  font-family: 'Nerko One';
`;

export {
  FadingDiv,
  HeaderDiv,
  HeaderWrapperDiv,
  FontDiv
};
