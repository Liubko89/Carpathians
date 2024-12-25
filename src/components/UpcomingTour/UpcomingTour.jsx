import css from "./UpcomingTour.module.css";

const UpcomingTour = ({
  img1x,
  img2x,
  imgTab1x,
  imgTab2x,
  alt,
  tourName,
  price,
}) => {
  return (
    <div className={css.itemWrapper}>
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={`${imgTab1x} 1x, ${imgTab2x} 2x`}
        />
        <source
          media="(max-width: 767.98px)"
          srcSet={`${img1x} 1x, ${img2x} 2x`}
        />
        <img className={css.img} src={img1x} alt={alt} />
      </picture>

      <div className={css.descrWrapper}>
        <h3 className={css.subTitle}>{tourName}</h3>
        <p className={css.descr}>From UAH {price}/person</p>
        <button className={css.btn} type="button">
          More Details
        </button>
      </div>
    </div>
  );
};

export default UpcomingTour;
