import Logo from "../Logo/Logo";
import icon from "../../assets/icons.svg";
import css from "./Header.module.css";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import { useState } from "react";

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <header className={css.header}>
      <Logo />
      {!modalIsOpen && (
        <button className={css.button} onClick={openModal}>
          <svg className={css.icon} width="28" height="15">
            <use href={`${icon}#icon-menu`}></use>
          </svg>
        </button>
      )}
      {modalIsOpen && (
        <ModalWrapper closeModal={closeModal} modalIsOpen={modalIsOpen} />
      )}
    </header>
  );
};

export default Header;
