import css from "./Container.module.css";

const Container = ({
  children,
  footerWrapper = false,
  heroWrapper = false,
}) => {
  return (
    <div
      className={
        (footerWrapper && `${css.footerWrapper}`) ||
        (heroWrapper && `${css.heroWrapper}`) ||
        `${css.container}`
      }
    >
      {children}
    </div>
  );
};

export default Container;
