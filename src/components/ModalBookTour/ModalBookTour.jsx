import css from "./ModalBookTour.module.css";
import icons from "../../assets/icons.svg";
import { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";

const ModalBookTour = ({
  closeModal,
  modalIsOpen,
  bookATourSection,
  children,
}) => {
  const modalWrapperRef = useRef(null);
  const modalRef = useRef(null);
  const [isClosed, setIsClosed] = useState(false);

  const handleCloseModal = useCallback(() => {
    setIsClosed(true);
    setTimeout(() => {
      closeModal();
    }, 600);
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
      <button
        className={bookATourSection ? css.hiden : css.btn}
        onClick={handleCloseModal}
      >
        <svg className={css.icon} width="40" height="40">
          <use href={`${icons}#icon-close`}></use>
        </svg>
      </button>
    </div>
  );
};

export default ModalBookTour;
