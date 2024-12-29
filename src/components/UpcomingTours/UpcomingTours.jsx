import css from "./UpcomingTours.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tours from "../../helpers/tours";
import UpcomingTour from "../UpcomingTour/UpcomingTour";
import SlickCarousel from "../SlickCarousel/SlickCarousel";

const UpcomingTours = ({ viewportWidth }) => {
  return (
    <section className={css.section} id="tours">
      <h2 className="titleH2">Upcoming tours</h2>

      <SlickCarousel viewportWidth={viewportWidth} list={tours}>
        {tours.map((tour) => {
          return (
            <li key={tour.id}>
              <UpcomingTour
                id={tour.id}
                name={tour.name}
                alt={tour.alt}
                price={tour.price}
                mobImage={tour.mobImage}
                mobImage2x={tour.mobImage2x}
                tabImage={tour.tabImage}
                tabImage2x={tour.tabImage2x}
                deskImage={tour.deskImage}
                deskImage2x={tour.deskImage2x}
              />
            </li>
          );
        })}
      </SlickCarousel>
    </section>
  );
};

export default UpcomingTours;
