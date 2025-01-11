import css from "./Reviews.module.css";
import ReviewItem from "../ReviewItem/ReviewItem";
import reviews from "../../helpers/reviews";
import clsx from "clsx";
import { useState } from "react";
import { useEffect } from "react";
import LazyLoad from "react-lazyload";

const Reviews = ({ viewportWidth }) => {
  const [renderList, setRenderList] = useState(reviews.slice(0, 2));

  useEffect(() => {
    viewportWidth >= 1440
      ? setRenderList(reviews)
      : setRenderList(reviews.slice(0, 2));
  }, [viewportWidth]);

  return (
    <section className={clsx("section", css.section)} id="reviews">
      <h2 className="titleH2">Reviews</h2>
      <LazyLoad height={200} offset={100}>
        <ul className={css.list}>
          {renderList.map((review) => {
            return (
              <ReviewItem
                key={review.id}
                name={review.name}
                mobImage={review.mobImage}
                mobImage2x={review.mobImage2x}
                tabImage={review.tabImage}
                tabImage2x={review.tabImage2x}
                deskImage={review.deskImage}
                deskImage2x={review.deskImage2x}
                mobPhoto={review.mobPhoto}
                mobPhoto2x={review.mobPhoto2x}
                tabPhoto={review.tabPhoto}
                tabPhoto2x={review.tabPhoto2x}
                deskPhoto={review.deskPhoto}
                deskPhoto2x={review.deskPhoto2x}
                textReview={review.textReview}
              />
            );
          })}
        </ul>
      </LazyLoad>
    </section>
  );
};

export default Reviews;
