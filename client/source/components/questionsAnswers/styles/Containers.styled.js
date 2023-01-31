import styled from 'styled-components';

export const Container = styled.div`
  color: #7E8079;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 0.1em solid black;
`;

export const InputContainer = styled.div`
  input {
    color: white;
    background-color: #EEF1F7;
    width: 50em;
  }
  button {
    background-color: #EEF1F7;
    color: white;
  }
`;

export const LoadContainer = styled.div`
  button {
    padding: 2em;
    background-color: #EEF1F7;
    font-size: 1em;
    border-radius: 0.1em;
    color: black;
    font-weight: 600;
    &:hover {
    color: white;
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
