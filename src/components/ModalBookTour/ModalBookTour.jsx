import css from "./ModalBookTour.module.css";
import { useEffect, useRef } from "react";
import clsx from "clsx";
import BookATour from "../BookATour/BookATour";

const ModalBookTour = ({ closeModal, modalIsOpen }) => {
  const modalWrapperRef = useRef(null);
  const modalRef = useRef(null);

  const handleEscape = (e) => {
    if (e.keyCode === 27) {
      closeModal();
    }
  };

  useEffect(() => {
    if (modalIsOpen) {
      window.scrollTo({ top: 0 });
      modalWrapperRef.current.focus();
    }
  }, [modalIsOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, closeModal]);

  return (
    <div
      ref={modalWrapperRef}
      className={clsx(css.wrapper, modalIsOpen ? css.showModal : css.hideModal)}
      tabIndex="0"
      onKeyDown={handleEscape}
    >
      <div className={css.modal} ref={modalRef}>
        <BookATour closeModal={closeModal} />
      </div>
    </div>
  );
};

export default ModalBookTour;
