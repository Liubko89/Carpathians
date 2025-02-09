import css from "./Footer.module.css";
import icons from "../../assets/icons.svg";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={css.footer} id="contacts">
      <h2 className={css.title}>{t("nav.contacts")}</h2>

      <ul className={css.contactsList}>
        <li className={css.contact}>
          <a
            className={css.addressLink}
            target="blank"
            href="https://maps.app.goo.gl/Uysi49DGAraYH5p18"
          >
            <svg className={css.icon} width="19" height="27">
              <use href={`${icons}#icon-place`}></use>
            </svg>
            <p className={css.linkDescr}>Lviv, {t("st")} Dorosheko, 44 k</p>
          </a>
        </li>
        <li className={css.contact}>
          <a className={css.addressLink} href="tel:+380971626790">
            <svg className={css.icon} width="18" height="29">
              <use href={`${icons}#icon-phone`}></use>
            </svg>
            <p className={css.linkDescr}>+38 (097) 162 -67-90</p>
          </a>
        </li>
        <li className={css.contact}>
          <a className={css.addressLink} href="mailto:mandrykarpaty@gmail.com">
            <svg
              className={clsx(css.icon, css.mailIcon)}
              width="27"
              height="21"
            >
              <use href={`${icons}#icon-email`}></use>
            </svg>
            <p className={css.linkDescr}>mandrykarpaty@gmail.com</p>
          </a>
        </li>
      </ul>

      <SocialMediaLinks />

      <div className={css.copyRightWrap}>
        <svg className={css.copyRightIcon} width="16" height="16">
          <use href={`${icons}#icon-copyright`}></use>
        </svg>
        <p className={css.copyRightDescription}>{t("createdBy")}</p>
      </div>
    </footer>
  );
};

export default Footer;
