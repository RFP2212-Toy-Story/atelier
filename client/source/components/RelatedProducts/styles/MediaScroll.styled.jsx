import styled from 'styled-components';

const StyledMediaScroll = styled.div`
  display: grid;
  gap: 1vw;
  grid-auto-flow: column;
  grid-auto-columns: 21%;

  overflow-x: hidden;
  overscroll-behavior-inline: contain;
  scroll-behavior: smooth;
  scroll-snap-type: inline mandatory;
  scroll-snap-align: start;
  scroll-padding-inline: 1rem;

  .left {
    color: #3D405B;
    font-size: 20%;
    text-shadow: 1em 1em #666B99
  }
`;

export default StyledMediaScroll;
