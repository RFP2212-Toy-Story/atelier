import React from 'react';
import { PhotoContainer } from './styles/Containers.styled';

const DisplayPhotos = function CreateDisplayPhotosComponent() {

  return (
    <PhotoContainer>
      <img
        src="https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        width="384"
        height="192"
        alt="legs wearing white converse shoes"
      />
    </PhotoContainer>
  );
};


export default DisplayPhotos;
