import React from 'react';

import Modal from '../../shared/Modal.jsx';
import useModal from '../../../useModal.js';

const ReviewPhoto = function ReviewPhoto({ photo }) {
  const { isOpen, onOpen, onClose } = useModal();

  return (
    <>
      <img
        className="review-photo-thumbnail"
        src={photo.url}
        alt="Submitted by reviewer"
        aria-hidden="true"
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <img
          // currently CSS from ReviewPhotos is leaking into here
          style={{ maxWidth: '100%' }}
          src={photo.url}
          alt="Enlarged"
        />
      </Modal>
    </>
  );
};

export default ReviewPhoto;
