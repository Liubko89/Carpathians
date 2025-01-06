import css from "./ModalWrapper.module.css";
import { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import CloseButton from "../CloseButton/CloseButton";

const ModalWrapper = ({ closeModal, modalIsOpen, children }) => {
  const modalWrapperRef = useRef(null);
  const modalRef = useRef(null);
  const [isClosed, setIsClosed] = useState(false);

  const handleCloseModal = useCallback(() => {
    setTimeout(() => {
      closeModal();
    }, 300);
    setIsClosed(true);
  }, [closeModal]);

  const handleEscape = (e) => {
    if (e.keyCode === 27) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    if (modalIsOpen) {
      modalWrapperRef.current.focus();
    }
  }, [modalIsOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, handleCloseModal]);

  return (
    <div
      ref={modalWrapperRef}
      className={css.wrapper}
      tabIndex="0"
      onKeyDown={handleEscape}
    >
      <div
        className={clsx(
          css.modal,
          !isClosed ? css.modalIsOpen : css.modalIsClosed
        )}
        ref={modalRef}
      >
        {children}
      </div>
      <CloseButton
        closeModal={handleCloseModal}
        color="iconLight"
        className1={css.btn}
      />
    </div>
  );
};

export default ModalWrapper;
