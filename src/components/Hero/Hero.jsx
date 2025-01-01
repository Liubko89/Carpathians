import css from "./Hero.module.css";
import { useState } from "react";
import ModalBookTour from "../ModalBookTour/ModalBookTour";
import BookATour from "../BookATour/BookATour";
import clsx from "clsx";
import { useEffect } from "react";

const Hero = ({ blockScrolling, allowScrolling }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
    blockScrolling();
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (!modalIsOpen) {
      allowScrolling();
    }
  }, [modalIsOpen]);

  return (
    <section className={css.heroSection}>
      <h1 className={css.title}>Tours to the Carpathians from Lviv</h1>
      <p className={css.descr}>
        Journeys to the very heart of the Carpathians for those who want a real
        reboot
      </p>
      <button
        className={clsx("btn", css.btn)}
        type="button"
        onClick={openModal}
      >
        Book a tour
      </button>

      <ModalBookTour closeModal={closeModal} modalIsOpen={modalIsOpen}>
        <BookATour closeModal={closeModal} />
      </ModalBookTour>
    </section>
  );
};

export default Hero;
