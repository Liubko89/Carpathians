import { useId } from "react";
import galleryImage from "../../helpers/galleryImg.js";
import CarouselSliders from "../CarouselSliders/CarouselSliders";
import GalleryItem from "../GalleryItem/GalleryItem.jsx";
import css from "./Gallery.module.css";

const Gallery = ({ viewportWidth }) => {
  const handleSlides = viewportWidth >= 768 ? 6 : 7;

  return (
    <section className={css.section} id="gallery">
      <h2 className={css.title}>Gallery</h2>
      <CarouselSliders slide={7} showDots={true} handleSlides={handleSlides}>
        {galleryImage.map(({ mob_1x, mob_2x, tab_1x, tab_2x }) => {
          return (
            <GalleryItem
              key={useId}
              image_1x={mob_1x}
              image_2x={mob_2x}
              imageTab_1x={tab_1x}
              imageTab_2x={tab_2x}
            />
          );
        })}
      </CarouselSliders>
    </section>
  );
};

export default Gallery;
