import { useState } from "react";
import css from "./ReviewTemplate.module.css";

import icons from "../../assets/icons.svg";
import clsx from "clsx";

const ReviewTemplate = ({ name, image, image_2x, photo, photo_2x, review }) => {
  const [overlay, setOverlay] = useState(false);
  return (
    <li className={css.listItem}>
      <div className={css.wrapper}>
        <div className={css.content}>
          <picture>
            <source media="(min-resolution: 192dpi)" srcSet={image_2x} />

            <img className={css.img} src={image} alt="avatar of reviewer" />
          </picture>

          <h3 className={css.listTitle}>{name}</h3>
          <p className={css.descr}>{review}</p>
        </div>
        <button className={css.btn} onClick={() => setOverlay(!overlay)}>
          <svg className={css.icon} width="26" height="16">
            <use href={`${icons}#icon-round`}></use>
          </svg>
        </button>
        <div className={clsx(css.overlay, overlay && css.turnArround)}>
          <picture>
            <source media="(min-resolution: 192dpi)" srcSet={photo_2x} />
            <img
              className={css.overlayImg}
              src={photo}
              alt="photo with the reviewer"
            />
          </picture>
        </div>
      </div>
    </li>
  );
};

export default ReviewTemplate;
