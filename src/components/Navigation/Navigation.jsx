import { useTranslation } from "react-i18next";
import css from "./Navigation.module.css";

const Navigation = ({ closeModal }) => {
  const { t } = useTranslation();

  return (
    <nav className={css.navigation}>
      <a className={css.navItem} onClick={closeModal} href="/#aboutUs">
        {t("nav.aboutUs")}
      </a>
      <a className={css.navItem} onClick={closeModal} href="/#tours">
        {t("nav.tours")}
      </a>
      <a className={css.navItem} onClick={closeModal} href="/#reviews">
        {t("nav.reviews")}
      </a>
      <a className={css.navItem} onClick={closeModal} href="/#gallery">
        {t("nav.gallery")}
      </a>
      <a className={css.navItem} onClick={closeModal} href="/#contacts">
        {t("nav.contacts")}
      </a>
    </nav>
  );
};

export default Navigation;
