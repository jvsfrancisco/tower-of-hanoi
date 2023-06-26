import ReactModal from "react-modal";
import { useEffect, useState } from "react";

// Estilo personalizado para o modal
const modalStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

// Componente Modal
const Modal = ({ isOpen, onClose, children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(isOpen);

  useEffect(() => {
    setModalIsOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setModalIsOpen(false);
    onClose();
  };

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={handleClose}
      contentLabel="Modal"
      style={modalStyle}
      className={"modal"}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;