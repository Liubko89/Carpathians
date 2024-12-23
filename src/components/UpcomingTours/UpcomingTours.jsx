import css from "./UpcomingTours.module.css";
import "react-multi-carousel/lib/styles.css";
import toursImg from "../../helpers/toursImg";
import CarouselSliders from "../CarouselSliders/CarouselSliders";
import UpcomingTour from "../UpcomingTour/UpcomingTour";
import { useId } from "react";

const UpcomingTours = () => {
  const viewportWidth = 768;
  const handleSlides = viewportWidth < 768 ? 2 : 1;

  return (
    <section className={css.section} id="tours">
      <h2 className={css.title}>Upcoming tours</h2>
      <CarouselSliders handleSlides={handleSlides}>
        <UpcomingTour
          img1x={toursImg.hoverla}
          img2x={toursImg.hoverla_2x}
          alt={"image of Hoverla"}
          tourName={"Ascent to Hoverla"}
          price={4.999}
          id={useId()}
        />
        <UpcomingTour
          img1x={toursImg.bukovel}
          img2x={toursImg.bukovel_2x}
          alt={"image of Bukovel"}
          tourName={"Ski tour to Bukovel"}
          price={7.499}
          id={useId()}
        />
        <UpcomingTour
          img1x={toursImg.carpathians}
          img2x={toursImg.carpathians_2x}
          alt={"image of Carpathians"}
          tourName={"Week in Carpathians"}
          price={9.499}
          id={useId()}
        />
      </CarouselSliders>
    </section>
  );
};

export default UpcomingTours;
