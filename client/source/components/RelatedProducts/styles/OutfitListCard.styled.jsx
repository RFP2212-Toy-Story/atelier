import styled from 'styled-components';

const StyledRelatedListCard = styled.div`
  padding: .5em;
  border-style: solid;
  border-color: #F6DEB6;
  border-radius: .5rem;
  background-color: #F6DEB6;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.50) 2px 3px 6px -2px,
              rgba(10, 30, 60, 0.20) 3px 3px 9px 2px;
  margin: 0.5rem;
  display: grid;
  grid-template-rows: min-content;
  gap: 0.5 vh;

  .card-content {
    padding: .4em;
    margin: 0em;
  }

  img {
    inline-size: 100%;
    aspect-ratio: 2 / 3;
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

  .removeButton {
    position: absolute;
    cursor: pointer;
    left: 89%;
    bottom: 94%;
    font-size: 2rem;
  }

  .addButton {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 4rem;
  }
`;

export default StyledRelatedListCard;
