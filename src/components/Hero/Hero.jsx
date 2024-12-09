import { useState } from "react";
import ModalBookTour from "../ModalBookTour/ModalBookTour";
import css from "./Hero.module.css";

const Hero = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [bookATourSection, setBookATourSection] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
    setBookATourSection(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setBookATourSection(false);
  };

  return (
    <section className={css.hero}>
      <h1 className={css.title}>Tours to the Carpathians from Lviv</h1>
      <p className={css.descr}>
        Journeys to the very heart of the Carpathians for those who want a real
        reboot
      </p>
      <button className={css.btn} type="button" onClick={openModal}>
        Book a tour
      </button>

      {modalIsOpen && (
        <ModalBookTour
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          bookATourSection={bookATourSection}
        ></ModalBookTour>
      )}
    </section>
  );
};

export default Hero;
