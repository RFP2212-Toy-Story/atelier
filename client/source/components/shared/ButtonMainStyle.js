import styled from 'styled-components';

const ButtonMainStyle = styled.button`
  padding: 1em;
  background-color: #F6DFB6;
  font-family: inherit;
  font-size: 1em;
  border: none;
  border-radius: 20px;
  margin-right: 12px;
  color: black;
  font-weight: 700;
  transition: transform .2s;
  --shadow-color: 49deg 31% 60%;
  box-shadow:
  0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.36),
  0.8px 1.6px 2px -0.8px hsl(var(--shadow-color) / 0.36),
  2.1px 4.1px 5.2px -1.7px hsl(var(--shadow-color) / 0.36),
  5px 10px 12.6px -2.5px hsl(var(--shadow-color) / 0.36);
  cursor: pointer;
  &:hover {
    color: #E07A5F;
    transform: scale(1.05);
  }
`;

export default ButtonMainStyle;
