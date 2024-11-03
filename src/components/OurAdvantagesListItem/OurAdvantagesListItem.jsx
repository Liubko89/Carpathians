import icons from "../../assets/icons.svg";
import css from "./OurAdvantagesListItem.module.css";

const OurAdvantagesListItem = ({ string }) => {
  return (
    <li className={css.listItem}>
      <div className={css.itemWrapper}>
        <svg className={css.icon} width="20" height="20">
          <use href={`${icons}#icon-star`}></use>
        </svg>
        <p className={css.descr}>{string}</p>
      </div>
    </li>
  );
};

export default OurAdvantagesListItem;
