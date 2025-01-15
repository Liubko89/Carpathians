import css from "./Hero.module.css";
import ModalBookTour from "../ModalBookTour/ModalBookTour";
import clsx from "clsx";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Hero = ({
  allowScrolling,
  openModal,
  closeModal,
  modalIsOpen,
  checkedTours,
  handleCheckboxChange,
}) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (!modalIsOpen) {
      allowScrolling();
    }
  }, [modalIsOpen]);

  return (
    <section className={css.heroSection}>
      <h1 className={css.title}>{t("toursToTheCarpathiansFromLviv")}</h1>
      <p className={css.descr}>{t("journeysToTheVeryHeart")}</p>
      <button
        className={clsx("btn", css.btn)}
        type="button"
        onClick={openModal}
      >
        {t("bookATour")}
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
