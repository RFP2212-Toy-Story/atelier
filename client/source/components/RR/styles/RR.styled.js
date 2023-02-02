import styled from 'styled-components';

export const ReviewModuleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 0.1em solid black;
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
  padding: 0.5em;
`;

export const SortContainer = styled.div`
  display: flex;
  padding: 0.5em;
  font-weight: bold;

  .sort-bar {
    padding: 0.5em;
    color: #3D405B;
    font-size: 115%;
  }

  .sort-selection {
    background-color: #fffbea;
    font-family: 'Nunito', sans-serif;
    color: #3D405B;
    font-size: 100%;
    font-weight: bold;
  }
`;

export const ReviewListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0.5em;
`;

export const ReviewTileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0.5em;

  .review-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5em;
  }

  .review-rating {
    text-align: left;
  }

  .review-user-date {
    text-align: right;
    font-size: 90%;
  }

  .review-summary {
    padding: 0.5em;
    font-weight: bold;
    font-size: 115%;
  }

  .review-text {
    padding: 0.5em;
  }

  .show-more-button {
    padding: 0.5em;
    color: #3D405B;
    background-color: #fffbea;
    font-family: 'Nunito', sans-serif;
    border: none;
    border-bottom: solid;
    border-bottom-width: 1px;
    border-color: #3D405B;
  }

  .review-rec {
    padding: 0.5em;
  }

  .review-response {
    padding: 2em;
    background: #f7eddc;
    font-style: italic;
  }

  .response-header {
    font-weight: bold;
  }

  .review-footer {
    padding: 0.5em;
    font-size: 85%
  }

  .review-footer-button {
    font-size: 95%;
    font-family: 'Nunito', sans-serif;
    color: #3D405B;
    background-color: #fffbea;
    padding: none;
    border: none;
    border-bottom: solid;
    border-bottom-width: 1px;
    border-color: #3D405B;
  }
`;

export const ReviewPhotos = styled.div`
  display: flex;
  flex-direction: row;

  img {
    max-width: 20%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    padding: 0.5em;
  }
`;

export const ReviewListFooter = styled.div`
  justify-content: space-around;

  .footer-button {
    background-color: #fffbea;
    font-family: 'Nunito', sans-serif;
    color: #3D405B;
    border-color: #3D405B;
    font-weight: bold;
    /* font-size: 110%; */
    padding: 1em;
  }

`;
