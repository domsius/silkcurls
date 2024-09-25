import React, { useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, content }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handleClickOutside = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleClickOutside}
    >
      <div ref={modalRef} className="bg-white p-4 rounded-lg shadow-lg w-full max-w-lg relative m-5">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-black" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M6.225 4.811L12 10.586l5.775-5.775a.75.75 0 011.06 1.06L13.061 11.646l5.774 5.774a.75.75 0 01-1.06 1.06L12 12.707l-5.775 5.774a.75.75 0 01-1.06-1.06l5.774-5.774-5.774-5.774a.75.75 0 111.06-1.06z" />
          </svg>
        </button>
        <div className="overflow-auto max-h-[80vh]">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Modal;