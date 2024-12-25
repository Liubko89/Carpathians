import css from "./UpcomingTours.module.css";
import "react-multi-carousel/lib/styles.css";
import tours from "../../helpers/tours";
import CarouselSliders from "../CarouselSliders/CarouselSliders";
import UpcomingTour from "../UpcomingTour/UpcomingTour";

const UpcomingTours = ({ viewportWidth }) => {
  const handleSlides = viewportWidth < 768 ? 2 : 1;

  return (
    <section className={css.section} id="tours">
      <h2 className={css.title}>Upcoming tours</h2>
      <CarouselSliders handleSlides={handleSlides}>
        {tours.map((tour) => {
          return (
            <UpcomingTour
              key={tour.id}
              id={tour.id}
              name={tour.name}
              alt={tour.alt}
              price={tour.price}
              mobImage={tour.mobImage}
              mobImage2x={tour.mobImage2x}
              tabImage={tour.tabImage}
              tabImage2x={tour.tabImage2x}
            />
          );
        })}
      </CarouselSliders>
    </section>
  );
};

export default UpcomingTours;
