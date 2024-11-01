import css from "./HeroWrapper.module.css";

const HeroWrapper = ({ children }) => {
  return <div className={css.wrapper}>{children}</div>;
};

export default HeroWrapper;
