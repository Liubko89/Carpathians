import css from "./UpcomingTour.module.css";

const UpcomingTour = ({ openModal, tour, chooseTour }) => {
  const handleClick = () => {
    openModal();
    chooseTour(tour.id);
  };

  return (
    <div className={css.itemWrapper}>
      <picture>
        <source
          media="(min-width: 1440px)"
          srcSet={`${tour.deskImage} 1x, ${tour.deskImage2x} 2x`}
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${tour.tabImage} 1x, ${tour.tabImage2x} 2x`}
        />
        <source
          media="(max-width: 767.98px)"
          srcSet={`${tour.mobImage} 1x, ${tour.mobImage2x} 2x`}
        />
        <img className={css.img} src={tour.mobImage} alt={tour.alt} />
      </picture>

      <div className={css.descrWrapper}>
        <h3 className={css.subTitle}>{tour.name}</h3>
        <p className={css.descr}>From UAH {tour.price}/person</p>
        <button className={css.btn} type="button" onClick={handleClick}>
          More Details
        </button>
      </div>
    </div>
  );
};

export default UpcomingTour;
