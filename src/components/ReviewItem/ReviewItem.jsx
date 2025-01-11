import css from "./ReviewItem.module.css";
import { useState } from "react";

import icons from "../../assets/icons.svg";
import clsx from "clsx";

const ReviewItem = ({
  name,
  mobImage,
  mobImage2x,
  tabImage,
  tabImage2x,
  deskImage,
  deskImage2x,
  mobPhoto,
  mobPhoto2x,
  tabPhoto,
  tabPhoto2x,
  deskPhoto,
  deskPhoto2x,
  textReview,
}) => {
  const [overlay, setOverlay] = useState(false);
  const handleClick = () => {
    setOverlay(!overlay);
  };

  return (
    <li className={css.listItem}>
      <div className={css.wrapper}>
        <div className={css.content}>
          <picture>
            <source
              media="(min-width: 1440px)"
              srcSet={`${deskImage} 1x, ${deskImage2x} 2x`}
            />
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
        <button
          className={css.btn}
          onClick={handleClick}
          aria-label="Show Photo"
        >
          <svg className={css.icon} width="26" height="16">
            <use href={`${icons}#icon-round`}></use>
          </svg>
        </button>
        <div className={clsx(css.overlay, overlay && css.turnArround)}>
          <picture>
            <source
              media="(min-width: 1440px)"
              srcSet={`${deskPhoto} 1x, ${deskPhoto2x} 2x`}
            />
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

export default ReviewItem;
