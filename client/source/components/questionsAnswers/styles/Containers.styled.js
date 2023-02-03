import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
`;


export const LoadContainer = styled.div`
  button {
    padding: 2em;
    background-color: #EEF1F7;
    font-size: 1em;
    border-radius: 0.1em;
    color: black;
    font-weight: 600;
    cursor: pointer;
    &:hover {
    color: white;
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
  }
`;

export const MoreButtonContainer = styled(ButtonContainer)`
  button {
    font-size: 75%;
    border: 1px solid #3D405B;
    background-color: white;
  }
`;
