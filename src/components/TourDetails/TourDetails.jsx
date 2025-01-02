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
        hideArrows
        appendCustomDots
      >
        {tour.moreDetails.map(({ day, bgImage, bgImage2x, activities }) => {
          return (
            <li className={css.listItem} key={day}>
              <picture className={css.picture}>
                <source
                  media="(max-width: 768px)"
                  srcSet={`${bgImage} 1x, ${bgImage2x} 2x`}
                />
                <img className={css.image} src={bgImage} alt={tour.alt} />
              </picture>

              <div className={css.activities}>
                <h3>{tour.name}</h3>
                <p>{day}</p>
                <ul>
                  {activities.map((activity) => {
                    return (
                      <li key={nanoid()}>
                        <p>{activity}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </SlickCarousel>
      <div className={css.priceWrapper}>
        <p>
          <span>uah</span> {tour.price}/person
        </p>
        <button type="button">book a tour</button>
      </div>
    </div>
  );
};

export default TourDetails;
