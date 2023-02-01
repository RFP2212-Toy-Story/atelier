import styled from 'styled-components';

const StyledRelatedListCard = styled.div`
  padding: 3vh;
  border-style: solid;
  border-color: #F2CC8F;
  border-radius: 1em;
  background-color: #F2CC8F;

  display: grid;
  grid-template-rows: min-content;
  gap: 0.5 vh;

  img {
    inline-size: 100%;
    aspect-ratio: 2 / 3;
    object-fit: cover;
    border-radius: .5rem
  }

  h3 {
    font-size: .8rem
  }

  h4 {
    font-size: 1.2rem
  }

  h5 {
    font-size: 1 rem
  }
`;

export default StyledRelatedListCard;
