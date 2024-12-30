import css from "./UpcomingTour.module.css";

const UpcomingTour = ({
  openModal,
  name,
  alt,
  price,
  mobImage,
  mobImage2x,
  tabImage,
  tabImage2x,
  deskImage,
  deskImage2x,
}) => {
  return (
    <div className={css.itemWrapper}>
      <picture>
        <source
          media="(min-width: 1440px)"
          srcSet={`${deskImage} 1x, ${deskImage2x} 2x`}
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${tabImage} 1x, ${tabImage2x} 2x`}
        />
        <source
          media="(max-width: 767.98px)"
          srcSet={`${mobImage} 1x, ${mobImage2x} 2x`}
        />
        <img className={css.img} src={mobImage} alt={alt} />
      </picture>

      <div className={css.descrWrapper}>
        <h3 className={css.subTitle}>{name}</h3>
        <p className={css.descr}>From UAH {price}/person</p>
        <button className={css.btn} type="button" onClick={openModal}>
          More Details
        </button>
      </div>
    </div>
  );
};

export default UpcomingTour;
