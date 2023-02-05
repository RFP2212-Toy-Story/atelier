import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
`;


export const LoadContainer = styled.div`
  padding: 1em;
  button {
    padding: 1em;
    background-color: #F6DFB6;
    font-size: 1em;
    border-radius: 20px;
    color: black;
    font-weight: 600;
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
