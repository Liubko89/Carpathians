import css from "./UpcomingTours.module.css";
import "react-multi-carousel/lib/styles.css";
import tours from "../../helpers/tours";
import CarouselSliders from "../CarouselSliders/CarouselSliders";
import UpcomingTour from "../UpcomingTour/UpcomingTour";

const UpcomingTours = ({ viewportWidth }) => {
  return (
    <section className={css.section} id="tours">
      <h2 className="titleH2">Upcoming tours</h2>
      <CarouselSliders viewportWidth={viewportWidth}>
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
