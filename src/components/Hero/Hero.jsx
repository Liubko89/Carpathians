import css from "./Hero.module.css";
import ModalBookTour from "../ModalBookTour/ModalBookTour";
import clsx from "clsx";
import { useEffect } from "react";

const Hero = ({
  allowScrolling,
  openModal,
  closeModal,
  modalIsOpen,
  checkedTours,
  handleCheckboxChange,
}) => {
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

      <ModalBookTour
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        checkedTours={checkedTours}
        handleCheckboxChange={handleCheckboxChange}
      />
    </section>
  );
};

export default Hero;
