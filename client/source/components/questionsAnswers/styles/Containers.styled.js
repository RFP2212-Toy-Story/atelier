import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  padding: 16px 0;
`;


export const LoadContainer = styled.div`
  padding: 1em;
  padding-top: 0;
  button {
    padding: 1em;
    background-color: #F6DFB6;
    font-family: inherit;
    font-size: 1em;
    border: none;
    border-radius: 20px;
    margin-right: 12px;
    color: black;
    font-weight: 700;
    --shadow-color: 49deg 31% 60%;
    box-shadow:
    0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.36),
    0.8px 1.6px 2px -0.8px hsl(var(--shadow-color) / 0.36),
    2.1px 4.1px 5.2px -1.7px hsl(var(--shadow-color) / 0.36),
    5px 10px 12.6px -2.5px hsl(var(--shadow-color) / 0.36);
    cursor: pointer;
    &:hover {
    color: #E07A5F;
    }
  }
`;

export const PhotoContainer = styled.div`
  background-color: #EEF1F7;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 0.1em solid black;
`;

export const ButtonContainer = styled.div`
  button {
    font-size: 95%;
    font-family: inherit;
    color: #3D405B;
    background-color: #fffbea;
    padding: none;
    border: none;
    border-bottom: solid;
    border-bottom-width: 1px;
    border-color: #3D405B;
    cursor: pointer;
    &:hover {
    color: #E07A5F;
    }
  }
`;

export const MoreButtonContainer = styled(ButtonContainer)`
  button {
    font-size: 75%;
    border: 1px solid #3D405B;
    background-color: white;
    border-radius: 5px;
  }
`;
