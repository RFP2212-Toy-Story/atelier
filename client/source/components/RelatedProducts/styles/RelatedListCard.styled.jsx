import styled from 'styled-components';

const StyledRelatedListCard = styled.div`
  padding: 3vh;
  border-style: solid;
  border-color: #F2CC8F;
  border-radius: 1em;
  background-color: #F2CC8F

  display: grid;
  grid-template-rows: min-content;
  gap: 0.5 vh;

  img {
    inline-size: 100%;
    aspect-ratio: 2 / 3;
    object-fit: cover;
    border-radius: .5em
  }
`;

export default StyledRelatedListCard;
