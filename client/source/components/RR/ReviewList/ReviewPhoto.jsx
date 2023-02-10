import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import PhotoModal from './PhotoModal.jsx';

const ReviewPhoto = function ReviewPhoto({ photo }) {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    document.body.classList.add('stop-scrolling');
    setModal(true);
  };

  const closeModal = () => {
    document.body.classList.remove('stop-scrolling');
    setModal(false);
  };

  return (
    <>
      <img
        className="review-photo-thumbnail"
        src={photo.url}
        alt="Submitted by reviewer"
        aria-hidden="true"
        onClick={openModal}
      />
      { modal && createPortal(<PhotoModal
        photo={photo}
        onClose={closeModal}
      />, document.body)}
    </>
  );
};

export default ReviewPhoto;
