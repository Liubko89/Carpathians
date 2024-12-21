import clsx from "clsx";
import icons from "../../assets/icons.svg";
import css from "./ButtonGroup.module.css";

const ButtonGroup = ({ next, previous, handleSlides, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;

  return (
    <div className={css.btnGroup}>
      <button
        className={clsx(css.btn, css.prevBtn, !currentSlide && css.hidden)}
        onClick={() => previous()}
      >
        <svg className={css.icon} width="10" height="18">
          <use href={`${icons}#icon-left`}></use>
        </svg>
      </button>
      <button
        className={clsx(
          css.btn,
          css.nextBtn,
          currentSlide === handleSlides && css.hidden
        )}
        onClick={() => next()}
      >
        <svg className={css.icon} width="10" height="18">
          <use href={`${icons}#icon-right`}></use>
        </svg>
      </button>
    </div>
  );
};

export default ButtonGroup;
