import css from "./Footer.module.css";
import icons from "../../assets/icons.svg";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <h2 className={css.title}>Contacts</h2>

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
            Lviv, st Dorosheko, 44 k
          </a>
        </li>
        <li className={css.contact}>
          <a className={css.addressLink} href="tel:+380971626790">
            <svg className={css.icon} width="18" height="29">
              <use href={`${icons}#icon-phone`}></use>
            </svg>
            +38 (097) 162 -67-90
          </a>
        </li>
        <li className={css.contact}>
          <a className={css.addressLink} href="mailto:mandrykarpaty@gmail.com">
            <svg className={css.icon} width="27" height="21">
              <use href={`${icons}#icon-email`}></use>
            </svg>
            mandrykarpaty@gmail.com
          </a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="">
            <svg className={css.socialLinkIcon} width="33" height="33">
              <use href={`${icons}#icon-telegram`}></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="">
            <svg className={css.socialLinkIcon} width="33" height="33">
              <use href={`${icons}#icon-instagram`}></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="">
            <svg className={css.socialLinkIcon} width="33" height="33">
              <use href={`${icons}#icon-facebook`}></use>
            </svg>
          </a>
        </li>
      </ul>
      <div>
        <svg className={css.copyRightIcon} width="16" height="16">
          <use href={`${icons}#icon-copyright`}></use>
        </svg>
        <p>Created by LelekaSoft</p>
      </div>
    </footer>
  );
};

export default Footer;
