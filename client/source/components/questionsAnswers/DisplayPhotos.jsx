import React from 'react';
import { PhotoContainer } from './styles/Containers.styled';
import qaData2 from './tests/exampleDataQA2';

const DisplayPhotos = function CreateDisplayPhotosComponent() {
  return (
    <PhotoContainer>
      <img
        src={qaData2.results[0].answers[3073848].photos[0]}
        width="384"
        height="192"
        alt="legs wearing white converse shoes"
      />
    </PhotoContainer>
  );
};


export default DisplayPhotos;
