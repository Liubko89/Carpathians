import css from "./UpcomingTours.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import hoverla from "../../assets/img/mob1x/overlay-min.jpg";
import bukovel from "../../assets/img/mob1x/overlay-1-min.jpg";
import carpathians from "../../assets/img/mob1x/overlay-2-min.jpg";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

const UpcomingTours = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 1440, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 375 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 375, min: 0 },
      items: 1,
    },
  };
  return (
    <section className={css.section}>
      <h2 className={css.title}>Upcoming tours</h2>
      <Carousel
        responsive={responsive}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
      >
        <div className={css.itemWrapper}>
          <img className={css.img} src={hoverla} alt="upcoming tours image 1" />
          <div className={css.descrWrapper}>
            <h3 className={css.subTitle}>Ascent to Hoverla</h3>
            <p className={css.descr}>From UAH 4.999/person</p>
            <button className={css.btn}>Book the tour</button>
          </div>
        </div>
        <div className={css.itemWrapper}>
          <img className={css.img} src={bukovel} alt="upcoming tours image 2" />
          <div className={css.descrWrapper}>
            <h3 className={css.subTitle}>Ski tour to Bukovel</h3>
            <p className={css.descr}>From UAH 7.499/person</p>
            <button className={css.btn}>Book the tour</button>
          </div>
        </div>
        <div className={css.itemWrapper}>
          <img
            className={css.img}
            src={carpathians}
            alt="upcoming tours image 3"
          />
          <div className={css.descrWrapper}>
            <h3 className={css.subTitle}>Week in Carpathians</h3>
            <p className={css.descr}>From UAH 9.999/person</p>
            <button className={css.btn}>Book the tour</button>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default UpcomingTours;
