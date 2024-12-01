import css from "./Navigation.module.css";

const Navigation = ({ closeModal }) => {
  return (
    <nav className={css.navigation}>
      <a className={css.navItem} onClick={closeModal} href="/#aboutUs">
        About us
      </a>
      <a className={css.navItem} onClick={closeModal} href="/#tours">
        Tours
      </a>
      <a className={css.navItem} onClick={closeModal} href="/#reviews">
        Reviews
      </a>
      <a className={css.navItem} onClick={closeModal} href="/#gallery">
        Gallery
      </a>
      <a className={css.navItem} onClick={closeModal} href="/#contacts">
        Contacts
      </a>
    </nav>
  );
};

export default Navigation;
