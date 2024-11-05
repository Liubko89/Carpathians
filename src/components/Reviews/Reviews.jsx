import css from "./Reviews.module.css";
import imgMaria from "../../assets/img/mob1x/Ellipse30.png";
import imgOstap from "../../assets/img/mob1x/Ellipse31.jpg";
import photoMaria from "../../assets/img/mob1x/Rectangle94.jpg";
import photoOstap from "../../assets/img/mob1x/Rectangle93.jpg";
import { firstReview } from "../../helpers/reviews";
import { useState } from "react";
import icons from "../../assets/icons.svg";

const Reviews = () => {
  const [overlay, setOverlay] = useState(false);

  return (
    <section className={css.section}>
      <h2 className={css.title}>Reviews</h2>
      <ul className={css.list}>
        <li className={css.listItem}>
          <div className={css.wrapper}>
            <div className={css.content}>
              <img className={css.img} src={imgMaria} alt="reviewer" />
              <h3 className={css.listTitle}>Maria</h3>
              <p className={css.descr}>{firstReview}</p>
            </div>
            <div
              className={
                overlay ? `${css.turnArround} ${css.overlay}` : css.overlay
              }
            >
              <img className={css.overlayImg} src={photoMaria} alt="photo" />
            </div>
            <button className={css.btn} onClick={() => setOverlay(!overlay)}>
              <svg className={css.icon} width="26" height="16">
                <use href={`${icons}#icon-round`}></use>
              </svg>
            </button>
          </div>
        </li>
        <li></li>
        <li className={css.lastReview}>last review</li>
      </ul>
    </section>
  );
};

export default Reviews;
