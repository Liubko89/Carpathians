import icon from "../../assets/icons.svg";
import css from "./Logo.module.css";
const Logo = () => {
  return (
    <a className={css.logo} href="/">
      <svg width="40" height="40">
        <use href={`${icon}#icon-logo`}></use>
      </svg>
    </a>
  );
};

export default Logo;
