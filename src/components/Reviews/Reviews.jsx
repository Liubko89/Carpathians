import css from "./Reviews.module.css";
import imgMaria from "../../assets/img/mob1x/Ellipse30.png";
import imgMaria_2x from "../../assets/img/mob2x/Ellipse30_2x.png";
import imgOstap from "../../assets/img/mob1x/Ellipse31.png";
import imgOstap_2x from "../../assets/img/mob2x/Ellipse31_2x.png";
import photoMaria from "../../assets/img/mob1x/Rectangle94.jpg";
import photoMaria_2x from "../../assets/img/mob2x/Rectangle94_2x.jpg";
import photoOstap from "../../assets/img/mob1x/Rectangle93.jpg";
import photoOstap_2x from "../../assets/img/mob2x/Rectangle93_2x.jpg";
import ReviewTemplate from "../ReviewTemplate/ReviewTemplate";
import { firstReview } from "../../helpers/reviews";
import { secondReview } from "../../helpers/reviews";

const Reviews = () => {
  return (
    <section className={css.section} id="reviews">
      <h2 className={css.title}>Reviews</h2>
      <ul className={css.list}>
        <ReviewTemplate
          name="Maria"
          image={imgMaria}
          image_2x={imgMaria_2x}
          photo={photoMaria}
          photo_2x={photoMaria_2x}
          review={firstReview}
        />
        <ReviewTemplate
          name="Ostap"
          image={imgOstap}
          image_2x={imgOstap_2x}
          photo={photoOstap}
          photo_2x={photoOstap_2x}
          review={secondReview}
        />
      </ul>
    </section>
  );
};

export default Reviews;
