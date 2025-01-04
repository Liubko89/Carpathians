import css from "./TourDetails.module.css";
import SlickCarousel from "../SlickCarousel/SlickCarousel";
import { nanoid } from "nanoid";

const TourDetails = ({ tour, viewportWidth }) => {
  return (
    <div className={css.tourDetailsWrapper}>
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
            return (
              <li className={css.listItem} key={day}>
                <picture className={css.picture}>
                  <source
                    media="(min-width: 1440px)"
                    srcSet={`${bgImageDesk} 1x, ${bgImageDesk2x} 2x`}
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet={`${bgImageTab} 1x, ${bgImageTab2x} 2x`}
                  />
                  <source
                    media="(max-width: 768px)"
                    srcSet={`${bgImage} 1x, ${bgImage2x} 2x`}
                  />
                  <img className={css.image} src={bgImage} alt={tour.alt} />
                </picture>

                <div className={css.activities}>
                  <h3 className={css.tourTitle}>{tour.name}</h3>
                  <p className={css.tourDay}>{day}</p>
                  <ul className={css.activitiesList}>
                    {activities.map((activity) => {
                      return (
                        <li className={css.activitiesItem} key={nanoid()}>
                          <p>{activity}</p>
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
          <span className={css.currency}>uah</span> {tour.price}/person
        </p>
        <button className="btn" type="button">
          book a tour
        </button>
      </div>
    </div>
  );
};

export default TourDetails;
