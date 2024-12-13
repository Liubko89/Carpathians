import css from "./UpcomingTour.module.css";

const UpcomingTour = ({ img1x, img2x, alt, tourName, price, id }) => {
  return (
    <div className={css.itemWrapper}>
      <picture>
        <source media="(min-resolution: 192dpi)" srcSet={img2x} />
        <img className={css.img} src={img1x} alt={alt} />
      </picture>

      <div className={css.descrWrapper}>
        <h3 className={css.subTitle}>{tourName}</h3>
        <p className={css.descr}>From UAH {price}/person</p>
        <button className={css.btn}>Book the tour</button>
      </div>
    </div>
  );
};

export default UpcomingTour;
