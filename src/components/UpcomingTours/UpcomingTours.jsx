import css from "./UpcomingTours.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tours from "../../helpers/tours";
import UpcomingTour from "../UpcomingTour/UpcomingTour";
import SlickCarousel from "../SlickCarousel/SlickCarousel";
import MoreDetailsModal from "../MoreDetailsModal/MoreDetailsModal";
import { useState } from "react";
import TourDetails from "../TourDetails/TourDetails";

const UpcomingTours = ({
  blockScrolling,
  allowScrolling,
  viewportWidth,
  openBookTourModal,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [chosenTourId, setChosenTourId] = useState(null);
  const chooseTour = (id) => setChosenTourId(id);
  const tour = tours.find((tour) => tour.id === chosenTourId);

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
                tour={tour}
                chooseTour={chooseTour}
              />
            </li>
          );
        })}
      </SlickCarousel>
      {showModal && (
        <MoreDetailsModal closeModal={closeModal}>
          <TourDetails
            closeModal={closeModal}
            tour={tour}
            viewportWidth={viewportWidth}
            openBookTourModal={openBookTourModal}
          />
        </MoreDetailsModal>
      )}
    </section>
  );
};

export default UpcomingTours;
