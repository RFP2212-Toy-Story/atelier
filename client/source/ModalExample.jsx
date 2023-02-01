import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent';

export default function ModalExample() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button type="button" onClick={() => setShowModal(true)}>
        Show modal using a portal
      </button>
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} />,
        document.body
      )}
    </div>
  );
}
