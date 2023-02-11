import styled from 'styled-components';

export const ReviewModuleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #3D405B;
`;

export const ReviewContentsContainer = styled.div`
  display: grid;
  gap: 2.0rem;
  justify-content: center;
  grid-auto-flow: column;
`;

export const BreakdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5em;
`;

export const RatingBreakdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.2em;
  margin-bottom: 2.2em;

  .rating-details {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.2em;
    margin-bottom: 0.5em;
  }

  .average-rating {
    font-size: 300%;
    font-weight: 510;
  }

  .star-rating {
    max-width: 100%;
    max-height: 100%;
  }

  .recommended-percentage {
    padding: 0.2em;
  }

  .review-count {
    padding: 0.2em;
    margin-bottom: 0.5em;
  }

  .rating-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.2em;
    margin-bottom: 0.5em;
    &:hover {
      color: #E07A5F;
      transform: scale(1.05);
      background: #F7EDDC;
      border-radius: 0.5rem;
    }
  }

  .filters-applied {
    padding: 0.2em;
    margin-top: 0.5em;
  }

  .default-button {
    padding: 0.2em;
    color: #3D405B;
    background-color: #fffbea;
    font-family: 'Nunito', sans-serif;
    border: none;
    border-bottom: solid;
    border-bottom-width: 1px;
    border-color: #3D405B;
    &:hover {
      color: #E07A5F;
    }
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
  padding: 0.2em;

  .trait-slider {
    padding: 0.2em;
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

  .sort-bar {
    padding: 0.5em;
    color: #3D405B;
    font-size: 115%;
  }
`;

export const ReviewListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5em;

  .reviews-scroll-container {
    max-height: 800px;
    width: 100%;
    overflow-y: auto;
  }

  .trait-options {
    display: flex;
    flex-direction: column;
  }
`;

export const FormRatingContents = styled.div`
  display: flex;
  flex-direction: row;

  .rating-text {
    padding: 0.5em;
  }
`;

export const RecommendRadioOptions = styled.div`
  padding: 0.5em;
`;

export const RadioOptions = styled.div`
  display: grid;
  grid-auto-flow: column;
`;

export const TraitOptions = styled.div`
  padding: 0.5em;
  display: flex;
  flex-direction: column;

  .option-label {
    font-size: 14px;
  }
`;

export const ReviewTileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0.5em;
  border-bottom: solid;
  border-width: 0.05rem;
  border-color:  #3D405B;
  padding-bottom: 1em;
  margin-bottom: 0.6em;

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
    display: flex;
    flex-direction: row;
    text-align: right;
    font-size: 90%;
  }

  .review-user {
    padding: 0.3em;
  }

  .review-date {
    padding: 0.3em;
  }

  .review-summary {
    padding: 0.5em;
    font-weight: bold;
    font-size: 1.1rem;
  }

  .review-text {
    padding: 0.5em;
    padding-top: 0;
    font-size: 1.1rem;
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
    &:hover {
      color: #E07A5F;
    }
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
    font-family: inherit;
    color: #3D405B;
    background-color: #fffbea;
    padding: none;
    border: none;
    border-bottom: solid;
    border-bottom-width: 1px;
    border-color: #3D405B;
    cursor: pointer;
    &:hover {
      color: #E07A5F;
    }
    &:disabled {
      color: #FFCAAF;
    }
  }
`;

export const ReviewPhotos = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ReviewPhotoThumbnail = styled.img`
  max-width: 20%;
  border-radius: 15px;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  padding: 0.5em;
  &:hover {
    transform: scale(1.05);
  }
`;

export const ReviewListFooter = styled.div`
  justify-content: space-around;
  align-items: flex-end;
  padding: 0.5em;
  margin-bottom: 1em;
`;
