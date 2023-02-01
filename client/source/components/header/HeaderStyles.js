import styled, { css, keyframes } from 'styled-components';

// FRAGMENTS
const BoxShadowLarge = css`
  rgba(240, 46, 170, 0.4) 0px 5px,
  rgba(240, 46, 170, 0.3) 0px 10px,
  rgba(240, 46, 170, 0.2) 0px 15px,
  rgba(240, 46, 170, 0.1) 0px 20px,
  rgba(240, 46, 170, 0.05) 0px 25px;
`;

const BoxShadowSmall = css`
  rgba(158, 30, 111, 0.4) 0px 5px,
  rgba(48, 9, 34, 0.3) 0px 10px;
`;

const ShrinkAnimation = keyframes`
  from {
    height: 140px;
    background-color: magenta;
    box-shadow: BoxShadowLarge;
  }

  to {
    height: 80px;
    background-color: darkmagenta;
    box-shadow: BoxShadowSmall;
  }
`;

// STYLES
const FadingDiv = styled.div`
  margin-right: 34px;
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

  ${(props) => {
    if (props.scrolled) {
      return css`
        box-shadow: ${BoxShadowSmall};
        animation: 2s ${ShrinkAnimation};
        height: 80px;
        background-color: darkmagenta;
      `;
    }
    return css`
      box-shadow: ${BoxShadowLarge}
      height: 140px;
      background-color: magenta;
    `;
  }}
`;

const HeaderWrapperDiv = styled.div`
  height: 150px;
`;

const PixelFontDiv = styled.div`
  font-family: 'Press Start 2P';
`;

export {
  FadingDiv,
  HeaderDiv,
  HeaderWrapperDiv,
  PixelFontDiv
};
