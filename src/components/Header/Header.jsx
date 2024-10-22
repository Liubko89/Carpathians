import Logo from "../Logo/Logo";
import icon from "../../assets/icons.svg";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <Logo />
      <button className={css.button}>
        <svg className={css.icon} width="28" height="15">
          <use href={`${icon}#icon-menu`}></use>
        </svg>
      </button>
    </header>
  );
};

export default Header;
