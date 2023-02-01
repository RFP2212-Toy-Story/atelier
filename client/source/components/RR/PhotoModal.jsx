import React from 'react';

const PhotoModal = function PhotoModal({ photo, onClose }) {
  return (
    <div className="review-photo-modal">
      <img
        src={photo.url}
        alt="Enlarged"
      />
      <button
        className="review-photo-close"
        type="button"
        onClick={onClose}
      >x
      </button>
    </div>
  );
};

export default PhotoModal;
