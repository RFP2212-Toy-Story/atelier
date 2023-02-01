import styled from 'styled-components';

export const ReviewModuleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 0.1em solid black;
  font-family: sans-serif;
`;

export const ReviewContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0.5em;
`;

export const BreakdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

export const ReviewListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 1em;
`;

export const ReviewTileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 1em;

  .review-header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .review-summary {
    font-weight: bold;
  }

  .review-response {
    background: #F5F5F5;
  }
`;

export const ReviewText = styled.div`

`;

export const ReviewPhotos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  img {
    inline-size: 15%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    padding: 0.5em;
  }
`;
