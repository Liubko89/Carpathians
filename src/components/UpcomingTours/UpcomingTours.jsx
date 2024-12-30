import css from "./UpcomingTours.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tours from "../../helpers/tours";
import UpcomingTour from "../UpcomingTour/UpcomingTour";
import SlickCarousel from "../SlickCarousel/SlickCarousel";
import MoreDetailsModal from "../MoreDetailsModal/MoreDetailsModal";
import { useState } from "react";

const UpcomingTours = ({ blockScrolling, allowScrolling, viewportWidth }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    blockScrolling();
  };
  const closeModal = () => {
    setShowModal(false);
    allowScrolling();
  };

  return (
    <section className={css.section} id="tours">
      <h2 className="titleH2">Upcoming tours</h2>

      <SlickCarousel viewportWidth={viewportWidth} list={tours}>
        {tours.map((tour) => {
          return (
            <li key={tour.id}>
              <UpcomingTour
                openModal={openModal}
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
      {showModal && (
        <MoreDetailsModal closeModal={closeModal}>
          <div style={{ width: "250px", margin: "0 auto", color: "white" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
            explicabo eos quae error vero aperiam magni dicta expedita corrupti
            molestias!
          </div>
        </MoreDetailsModal>
      )}
    </section>
  );
};

export default UpcomingTours;
