import css from "./SliderArrow.module.css";
import icons from "../../assets/icons.svg";
import clsx from "clsx";

const SliderArrow = ({ onClick, currentSlide, listLength, direction }) => {
  return (
    (direction === "prev" && (
      <button
        className={clsx(
          css.btn,
          css.prevBtn,
          currentSlide === 0 && css.disabled
        )}
        onClick={onClick}
        aria-label="Previous Slide"
      >
        <svg className={css.icon} width="10" height="18">
          <use href={`${icons}#icon-left`}></use>
        </svg>
      </button>
    )) ||
    (direction === "next" && (
      <button
        className={clsx(
          css.btn,
          css.nextBtn,
          currentSlide === listLength && css.disabled
        )}
        onClick={onClick}
        aria-label="Next Slide"
      >
        <svg className={css.icon} width="10" height="18">
          <use href={`${icons}#icon-left`}></use>
        </svg>
      </button>
    ))
  );
};

export default SliderArrow;
