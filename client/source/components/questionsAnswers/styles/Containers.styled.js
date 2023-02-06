import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  padding: 16px 0;
`;

export const LoadContainer = styled.div`
  padding: 1em;
  padding-top: 0;
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
  }
`;
