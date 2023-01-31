import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import PhotoModal from './PhotoModal.jsx';

const ReviewPhoto = function ReviewPhoto({ photo }) {
  const [modal, setModal] = useState(false);

  return (
    <>
      <img
        className="review-photo-thumbnail"
        src={photo.url}
        alt="Submitted by reviewer"
        aria-hidden="true"
        onClick={() => setModal(true)}
      />
      { modal && createPortal(
        <PhotoModal
          photo={photo}
          onClose={() => setModal(false)}
        />, document.body)}
    </>
  );
};

export default ReviewPhoto;
