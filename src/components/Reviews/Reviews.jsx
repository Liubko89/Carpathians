import css from "./Reviews.module.css";
import imgMaria from "../../assets/img/mob1x/Ellipse30.png";
import imgOstap from "../../assets/img/mob1x/Ellipse31.png";
import photoMaria from "../../assets/img/mob1x/Rectangle94.jpg";
import photoOstap from "../../assets/img/mob1x/Rectangle93.jpg";
import ReviewTemplate from "../ReviewTemplate/ReviewTemplate";

const Reviews = () => {
  return (
    <section className={css.section}>
      <h2 className={css.title}>Reviews</h2>
      <ul className={css.list}>
        <ReviewTemplate image={imgMaria} photo={photoMaria} />
        <ReviewTemplate image={imgOstap} photo={photoOstap} />
      </ul>
    </section>
  );
};

export default Reviews;
