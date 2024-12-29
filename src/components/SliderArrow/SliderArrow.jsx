import css from "./SliderArrow.module.css";
import icons from "../../assets/icons.svg";
import clsx from "clsx";

const SliderArrow = ({ onClick, currentSlide, listLength, direction }) => {
  return (
    <button
      className={clsx(
        css.btn,
        direction === "prev" && css.prevBtn,
        direction === "next" && css.nextBtn,
        currentSlide === listLength && css.disabled,
        currentSlide === 0 && direction === "prev" && css.disabled
      )}
      onClick={onClick}
    >
      <svg className={css.icon} width="10" height="18">
        <use href={`${icons}#icon-left`}></use>
      </svg>
    </button>
  );
};

export default SliderArrow;
