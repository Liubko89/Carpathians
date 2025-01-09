import css from "./MoreDetailsModal.module.css";
import CloseButton from "../CloseButton/CloseButton";
import { useRef } from "react";
import { useEffect } from "react";

const MoreDetailsModal = ({ children, closeModal }) => {
  const modalRef = useRef(null);
  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      closeModal();
    }
  };

  useEffect(() => {
    modalRef.current.focus();
  }, []);

  return (
    <div
      className={css.modal}
      ref={modalRef}
      onKeyDown={handleKeyDown}
      tabIndex="0"
    >
      <CloseButton closeModal={closeModal} color="iconLight" />
      {children}
    </div>
  );
};

export default MoreDetailsModal;
