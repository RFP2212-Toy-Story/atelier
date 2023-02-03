import { useState } from 'react';

const useModal = function useModal() {
  const [showModal, setShowModal] = useState(false);

  return {
    isOpen: showModal,
    onOpen: (e) => {
      e.stopPropagation();
      document.body.classList.add('stop-scrolling');
      setShowModal(true);
    },
    onClose: (e) => {
      e.stopPropagation();
      document.body.classList.remove('stop-scrolling');
      setShowModal(false);
    }
  };
};

export default useModal;
