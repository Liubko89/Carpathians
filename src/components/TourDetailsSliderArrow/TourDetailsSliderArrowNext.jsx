import css from "./TourDetailsSliderArrow.module.css";
import icons from "../../assets/icons.svg";
import clsx from "clsx";

const TourDetailsSliderArrowNext = ({ onClick }) => {
  return (
    <button className={clsx(css.btn, css.nextBtn)} onClick={onClick}>
      <svg className={css.icon} width="30" height="56">
        <use href={`${icons}#icon-left`}></use>
      </svg>
    </button>
  );
};

export default TourDetailsSliderArrowNext;
