import React from 'react';

const AnswerPhoto = function CreateAnswerPhotoComponent({ photo }) {
  return (
    <img
      className="review-photo-thumbnail"
      src={photo}
      width="100"
      height="100"
      alt="Photo submitted by reviewer"
      aria-hidden="true"
    />
  );
};

export default AnswerPhoto;
