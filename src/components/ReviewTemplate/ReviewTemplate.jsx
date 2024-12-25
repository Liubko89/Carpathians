import { useState } from "react";
import css from "./ReviewTemplate.module.css";

import icons from "../../assets/icons.svg";
import clsx from "clsx";

const ReviewTemplate = ({
  name,
  mobImage,
  mobImage2x,
  tabImage,
  tabImage2x,
  mobPhoto,
  mobPhoto2x,
  tabPhoto,
  tabPhoto2x,
  textReview,
}) => {
  const [overlay, setOverlay] = useState(false);
  return (
    <li className={css.listItem}>
      <div className={css.wrapper}>
        <div className={css.content}>
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={`${tabImage} 1x, ${tabImage2x} 2x`}
            />
            <source
              media="(max-width: 767.98px)"
              srcSet={`${mobImage} 1x, ${mobImage2x} 2x`}
            />

            <img
              className={css.img}
              src={mobImage}
              alt="avatar of a reviewer"
            />
          </picture>

          <h3 className={css.listTitle}>{name}</h3>
          <p className={css.descr}>{textReview}</p>
        </div>
        <button className={css.btn} onClick={() => setOverlay(!overlay)}>
          <svg className={css.icon} width="26" height="16">
            <use href={`${icons}#icon-round`}></use>
          </svg>
        </button>
        <div className={clsx(css.overlay, overlay && css.turnArround)}>
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={`${tabPhoto} 1x, ${tabPhoto2x} 2x`}
            />
            <source
              media="(max-width: 767.98px)"
              srcSet={`${mobPhoto} 1x, ${mobPhoto2x} 2x`}
            />
            <img
              className={css.overlayImg}
              src={mobPhoto}
              alt="photo with the reviewer"
            />
          </picture>
        </div>
      </div>
    </li>
  );
};

export default ReviewTemplate;
