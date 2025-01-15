import css from "./Header.module.css";
import Logo from "../Logo/Logo";
import icon from "../../assets/icons.svg";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

const Header = ({ viewportWidth, blockScrolling, allowScrolling }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
    blockScrolling();
  };
  const closeModal = () => {
    setModalIsOpen(false);
    allowScrolling();
  };

  return (
    <header className={css.header}>
      <Logo />
      <LanguageSelector />
      {!modalIsOpen && viewportWidth < 1440 && (
        <button
          className={css.button}
          onClick={openModal}
          aria-label="navigation menu button"
        >
          <svg className={css.icon} width="28" height="15">
            <use href={`${icon}#icon-menu`}></use>
          </svg>
        </button>
      )}
      {modalIsOpen && (
        <ModalWrapper closeModal={closeModal} modalIsOpen={modalIsOpen}>
          <Navigation closeModal={closeModal} />
          <SocialMediaLinks verticalDirection />
        </ModalWrapper>
      )}

      {viewportWidth >= 1440 && <Navigation />}
    </header>
  );
};

export default Header;
