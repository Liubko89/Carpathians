import css from "./TourDetails.module.css";
import SlickCarousel from "../SlickCarousel/SlickCarousel";
import { nanoid } from "nanoid";
import CloseButton from "../CloseButton/CloseButton";
import { useTranslation } from "react-i18next";

const TourDetails = ({
  tour,
  viewportWidth,
  openBookTourModal,
  closeModal,
  checkTour,
}) => {
  const { t } = useTranslation();
  const handlClick = () => {
    checkTour(tour.name);
    closeModal();
    openBookTourModal();
  };
  return (
    <div className={css.tourDetailsWrapper}>
      <CloseButton closeModal={closeModal} color="iconLight" />
      <SlickCarousel
        viewportWidth={viewportWidth}
        list={tour.moreDetails}
        slides={1}
        appendCustomDots
        hideArrows={viewportWidth >= 1400 ? false : true}
        insideArrows={viewportWidth >= 1400 ? true : false}
      >
        {tour.moreDetails.map(
          ({
            day,
            bgImage,
            bgImage2x,
            bgImageTab,
            bgImageTab2x,
            bgImageDesk,
            bgImageDesk2x,
            activities,
          }) => {
            const image = (x) => {
              if (viewportWidth <= 768) {
                return x === "1x" ? bgImage : bgImage2x;
              } else if (viewportWidth >= 768 && viewportWidth < 1440) {
                return x === "1x" ? bgImageTab : bgImageTab2x;
              } else {
                return x === "1x" ? bgImageDesk : bgImageDesk2x;
              }
            };
            return (
              <li className={css.listItem} key={day}>
                <div
                  className={css.activities}
                  style={{
                    backgroundImage: `image-set(url(${image(
                      "1x"
                    )}) 1x, url(${image("2x")}) 2x)`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <h3 className={css.tourTitle}>{t(tour.name)}</h3>
                  <p className={css.tourDay}>
                    {day} {t("day")}
                  </p>
                  <ul className={css.activitiesList}>
                    {activities.map((activity) => {
                      return (
                        <li className={css.activitiesItem} key={nanoid()}>
                          <p>{t(activity)}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          }
        )}
      </SlickCarousel>
      <div className={css.priceWrapper}>
        <p className={css.tourPrice}>
          <span className={css.currency}>uah</span> {tour.price}/{t("person")}
        </p>
        <button className="btn" type="button" onClick={handlClick}>
          {t("bookATour")}
        </button>
      </div>
    </div>
  );
};

export default TourDetails;
