import { useState } from "react";
import css from "./ReviewTemplate.module.css";

import icons from "../../assets/icons.svg";

const ReviewTemplate = ({ image, photo, review }) => {
  const [overlay, setOverlay] = useState(false);
  return (
    <li className={css.listItem}>
      <div className={css.wrapper}>
        <div className={css.content}>
          <img className={css.img} src={image} alt="reviewer" />
          <h3 className={css.listTitle}>Maria</h3>
          <p className={css.descr}>{review}</p>
        </div>
        <button className={css.btn} onClick={() => setOverlay(!overlay)}>
          <svg className={css.icon} width="26" height="16">
            <use href={`${icons}#icon-round`}></use>
          </svg>
        </button>
        <div
          className={
            overlay ? `${css.turnArround} ${css.overlay}` : css.overlay
          }
        >
          <img className={css.overlayImg} src={photo} alt="photo" />
        </div>
      </div>
    </li>
  );
};

export default ReviewTemplate;
