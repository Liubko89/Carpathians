import css from "./ModalWrapper.module.css";
import icons from "../../assets/icons.svg";
import { useEffect, useRef } from "react";

const ModalWrapper = ({ closeModal, modalIsOpen }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (modalIsOpen) {
      modalRef.current.focus();
    }
  }, [modalIsOpen]);

  const handleEscape = (e) => {
    if (e.keyCode === 27) {
      closeModal();
    }
  };
  return (
    <div
      ref={modalRef}
      className={css.wrapper}
      tabIndex="0"
      onKeyDown={handleEscape}
    >
      <div className={css.modal}></div>
      <button className={css.btn} onClick={closeModal}>
        <svg className={css.icon} width="40" height="40">
          <use href={`${icons}#icon-close`}></use>
        </svg>
      </button>
    </div>
  );
};

export default ModalWrapper;
