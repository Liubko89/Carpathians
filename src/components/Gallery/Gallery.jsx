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
        <GalleryItem
          image_1x={galleryImage.mob_1_1x}
          image_2x={galleryImage.mob_1_2x}
          imageTab_1x={galleryImage.tab_1_1x}
          imageTab_2x={galleryImage.tab_1_2x}
        />
        <GalleryItem
          image_1x={galleryImage.mob_2_1x}
          image_2x={galleryImage.mob_2_2x}
          imageTab_1x={galleryImage.tab_2_1x}
          imageTab_2x={galleryImage.tab_2_2x}
        />
        <GalleryItem
          image_1x={galleryImage.mob_3_1x}
          image_2x={galleryImage.mob_3_2x}
          imageTab_1x={galleryImage.tab_3_1x}
          imageTab_2x={galleryImage.tab_3_2x}
        />
        <GalleryItem
          image_1x={galleryImage.mob_4_1x}
          image_2x={galleryImage.mob_4_2x}
          imageTab_1x={galleryImage.tab_4_1x}
          imageTab_2x={galleryImage.tab_4_2x}
        />
        <GalleryItem
          image_1x={galleryImage.mob_5_1x}
          image_2x={galleryImage.mob_5_2x}
          imageTab_1x={galleryImage.tab_5_1x}
          imageTab_2x={galleryImage.tab_5_2x}
        />
        <GalleryItem
          image_1x={galleryImage.mob_6_1x}
          image_2x={galleryImage.mob_6_2x}
          imageTab_1x={galleryImage.tab_6_1x}
          imageTab_2x={galleryImage.tab_6_2x}
        />
        <GalleryItem
          image_1x={galleryImage.mob_7_1x}
          image_2x={galleryImage.mob_7_2x}
          imageTab_1x={galleryImage.tab_7_1x}
          imageTab_2x={galleryImage.tab_7_2x}
        />
        <GalleryItem
          image_1x={galleryImage.mob_8_1x}
          image_2x={galleryImage.mob_8_2x}
          imageTab_1x={galleryImage.tab_8_1x}
          imageTab_2x={galleryImage.tab_8_2x}
        />
      </CarouselSliders>
    </section>
  );
};

export default Gallery;
