import styled from 'styled-components';

const StyledRelatedList = styled.div`
  display: grid;
  gap: 1vw;
  grid-auto-flow: column;
  grid-auto-columns: 14%;

  overflow-x: auto;
  overscroll-behavior-inline: contain
`;

export default StyledRelatedList;
