import { useState } from 'react';

const useModal = function useModal() {
  const [showModal, setShowModal] = useState(false);

  return {
    isOpen: showModal,
    onOpen: () => setShowModal(true),
    onClose: () => setShowModal(false)
  };
};

export default useModal;
