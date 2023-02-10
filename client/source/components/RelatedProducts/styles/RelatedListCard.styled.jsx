import styled from 'styled-components';

const StyledRelatedListCard = styled.div`
  padding: .5em;
  border-style: solid;
  border-color: #F6DEB6;
  border-radius: .5rem;
  background-color: #F6DEB6;
  position: relative;

  display: grid;
  grid-template-rows: min-content;
  gap: 0.5 vh;

  .card-content {
    padding: .4em;
    margin: 0em;
  }

  img {
    inline-size: 100%;
    aspect-ratio: 3 / 4;
    object-fit: cover;
    border-radius: .5rem;
  }

  h3 {
    font-size: .8rem;
  }

  h4 {
    font-size: 1.2rem;
  }

  h5 {
    font-size: 1 rem;
  }

  .compareButton {
    position: absolute;
    cursor: pointer;
    left: 89%;
    bottom: 94%;
    font-size: 2rem;
  }
`;

export default StyledRelatedListCard;
