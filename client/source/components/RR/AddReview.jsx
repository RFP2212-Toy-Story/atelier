import React, { useState } from 'react';

const AddReview = function AddReview() {
  const [modal, setModal] = useState(false);

  return (
    <button
      className="showModal"
      type="button"
      onClick={() => setModal(!modal)}
    >ADD A REVIEW
    </button>
  );
};

export default AddReview;
