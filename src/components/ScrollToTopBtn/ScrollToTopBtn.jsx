import css from "./ScrollToTopBtn.module.css";
import icons from "../../assets/icons.svg";

const ScrollToTopBtn = () => {
  const handleScroll = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <button className={css.btn} type="button" onClick={handleScroll}>
      <svg className={css.icon} width="20" height="36">
        <use href={`${icons}#icon-left`}></use>
      </svg>
    </button>
  );
};

export default ScrollToTopBtn;
