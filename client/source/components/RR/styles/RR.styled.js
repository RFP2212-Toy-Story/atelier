import styled from 'styled-components';

export const ReviewModuleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 0.1em solid black;
`;

export const ReviewContentsContainer = styled.div`
  display: grid;
  gap: 1rem;
  justify-content: center;
  grid-auto-flow: column;
  /* grid-auto-columns: auto 1fr 1fr auto; */
  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0.5em; */
`;

export const BreakdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5em;
`;

export const RatingBreakdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5em;

  .rating-details {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em;
  }

  .average-rating {
    font-size: 300%;
  }

  .recommended-percentage, .review-count {
    padding: 0.5em;
  }

  .rating-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em;
  }

  .rating-bar:hover {
    background: #f7eddc;
  }

  .bar-label {
    text-decoration: underline;
    white-space: nowrap;
  }

  progress::-webkit-progress-bar {
    background-color: #F6DFB6;
    border-radius: 20px;
    width: 100%;
  }

  progress {
    background-color: #F6DFB6;
    border-radius: 20px;
    width: 100%;
    margin: 0.5em;
  }

  progress::-webkit-progress-value {
    background-color: #74AA90 !important;
    border-radius: 20px;
    width: 100%;
  }

  progress::-moz-progress-bar {
    background-color: #74AA90 !important;
    border-radius: 20px;
    width: 100%;
  }

  progress {
    color: #74AA90;
    border-radius: 20px;
    width: 100%;
  }

`;

export const ProductBreakdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5em;

  .trait-slider {
    padding: 0.5em;
    margin-bottom: 1em;
  }

  input[type="range"] {
    -webkit-appearance: none;
    background: #E07A5F;
    border-radius: 20px;
    height: 0.35rem;
    width: 100%
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background-color: #3D405B;
    border-radius: 20px;
    height: 1rem;
    width: 1rem;
  }

  .slider-text {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 80%
  }
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
    background-color: #FFFBEA;
    font-family: 'Nunito', sans-serif;
    color: #3D405B;
    font-size: 100%;
    font-weight: bold;
  }
`;

export const ReviewListContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: stretch; */
  padding: 0.5em;
  /* overscroll-behavior-y: contain; */
`;

export const ReviewTileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0.5em;
  border-bottom: solid;
  border-width: 0.05rem;
  border-color:  #3D405B;

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
    aspect-ratio: 3 / 2;
    object-fit: cover;
    padding: 0.5em;
  }
`;

export const ReviewListFooter = styled.div`
  justify-content: space-around;
  align-items: center;
  padding: 0.5em;

  .footer-button {
    background-color: #fffbea;
    font-family: 'Nunito', sans-serif;
    color: #3D405B;
    border-color: #3D405B;
    font-weight: bold;
    padding: 1em;
    margin: 0.5em;
  }
`;
