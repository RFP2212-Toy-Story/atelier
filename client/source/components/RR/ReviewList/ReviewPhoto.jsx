import React from 'react';

import Modal from '../../shared/Modal.jsx';
import useModal from '../../../useModal.js';

import { ReviewPhotoThumbnail } from '../styles/RR.styled.js';

const ReviewPhoto = function ReviewPhoto({ photo }) {
  const { isOpen, onOpen, onClose } = useModal();

  return (
    <>
      <ReviewPhotoThumbnail
        className="review-photo-thumbnail"
        src={photo.url}
        alt="Submitted by reviewer"
        aria-hidden="true"
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <img
          style={{ maxWidth: '100%', margin: '1rem' }}
          src={photo.url}
          alt="Enlarged"
        />
      </Modal>
    </>
  );
};

export default ReviewPhoto;
