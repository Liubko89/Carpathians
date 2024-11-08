import icons from "../../assets/icons.svg";
import css from "./ButtonGroup.module.css";

const ButtonGroup = ({ next, previous, slide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className={css.btnGroup}>
      <button
        className={`${css.prevBtn} ${currentSlide === 0 ? css.hidden : ""}`}
        onClick={() => previous()}
      >
        <svg className={css.prevIcon} width="10" height="18">
          <use href={`${icons}#icon-left`}></use>
        </svg>
      </button>
      <button
        className={`${css.nextBtn} ${currentSlide === slide ? css.hidden : ""}`}
        onClick={() => next()}
      >
        <svg className={css.nextIcon} width="10" height="18">
          <use href={`${icons}#icon-right`}></use>
        </svg>
      </button>
    </div>
  );
};

export default ButtonGroup;
