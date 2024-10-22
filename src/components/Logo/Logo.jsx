import icon from "../../assets/icons.svg";
import css from "./Logo.module.css";
const Logo = () => {
  return (
    <div>
      <a href="/">
        <svg className={css.logo} width="40" height="40">
          <use href={`${icon}#icon-logo`}></use>
        </svg>
      </a>
    </div>
  );
};

export default Logo;
