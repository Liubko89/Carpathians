import css from "./TourDetailsSliderArrow.module.css";
import icons from "../../assets/icons.svg";
import clsx from "clsx";

const TourDetailsSliderArrow = ({ onClick, direction }) => {
  return (
    (direction === "prev" && (
      <button
        className={clsx(css.btn, css.prevBtn)}
        onClick={onClick}
        aria-label="Previous Slider"
      >
        <svg className={css.icon} width="30" height="56">
          <use href={`${icons}#icon-left`}></use>
        </svg>
      </button>
    )) ||
    (direction === "next" && (
      <button
        className={clsx(css.btn, css.nextBtn)}
        onClick={onClick}
        aria-label="Next Slider"
      >
        <svg className={css.icon} width="30" height="56">
          <use href={`${icons}#icon-left`}></use>
        </svg>
      </button>
    ))
  );
};

export default TourDetailsSliderArrow;
