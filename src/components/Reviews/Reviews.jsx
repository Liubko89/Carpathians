import css from "./Reviews.module.css";
import ReviewTemplate from "../ReviewTemplate/ReviewTemplate";
import reviews from "../../helpers/reviews";
import clsx from "clsx";

const Reviews = () => {
  return (
    <section className={clsx("section", css.section)} id="reviews">
      <h2 className="titleH2">Reviews</h2>
      <ul className={css.list}>
        {reviews.map((review) => {
          return (
            <ReviewTemplate
              key={review.id}
              name={review.name}
              mobImage={review.mobImage}
              mobImage2x={review.mobImage2x}
              tabImage={review.tabImage}
              tabImage2x={review.tabImage2x}
              mobPhoto={review.mobPhoto}
              mobPhoto2x={review.mobPhoto2x}
              tabPhoto={review.tabPhoto}
              tabPhoto2x={review.tabPhoto2x}
              textReview={review.textReview}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Reviews;
