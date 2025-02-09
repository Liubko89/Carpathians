import css from "./Gallery.module.css";
import galleryImage from "../../helpers/galleryImg.js";
import GalleryItem from "../GalleryItem/GalleryItem.jsx";
import { nanoid } from "nanoid";
import SlickCarousel from "../SlickCarousel/SlickCarousel.jsx";
import { useEffect } from "react";
import { useState } from "react";
import LazyLoad from "react-lazyload";
import { useTranslation } from "react-i18next";

const Gallery = ({ viewportWidth }) => {
  const { t } = useTranslation();
  const [slides, setSlides] = useState(null);

  useEffect(() => {
    const handleSlides = () => {
      viewportWidth < 768 ? setSlides(1) : setSlides(2);
    };
    handleSlides();
  }, [viewportWidth]);

  return (
    <section className={css.section} id="gallery">
      <h2 className="titleH2">{t("nav.gallery")}</h2>
      <LazyLoad height={200} offset={100} scroll={true}>
        <SlickCarousel
          viewportWidth={viewportWidth}
          list={galleryImage}
          slides={slides}
        >
          {galleryImage.map(
            ({ mob_1x, mob_2x, tab_1x, tab_2x, desk_1x, desk_2x }) => {
              return (
                <li key={nanoid()}>
                  <GalleryItem
                    image_1x={mob_1x}
                    image_2x={mob_2x}
                    imageTab_1x={tab_1x}
                    imageTab_2x={tab_2x}
                    imageDesk_1x={desk_1x}
                    imageDesk_2x={desk_2x}
                  />
                </li>
              );
            }
          )}
        </SlickCarousel>
      </LazyLoad>
    </section>
  );
};

export default Gallery;
