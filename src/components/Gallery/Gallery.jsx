import galleryImage from "../../helpers/galleryImg.js";
import CarouselSliders from "../CarouselSliders/CarouselSliders";
import GalleryItem from "../GalleryItem/GalleryItem.jsx";
import css from "./Gallery.module.css";

const Gallery = () => {
  return (
    <section className={css.section}>
      <h2 className={css.title}>Gallery</h2>
      <CarouselSliders slide={7} showDots={true}>
        <GalleryItem
          size={"(max-width: 767.99px)"}
          image_1x={galleryImage.mob_1_1x}
          image_2x={galleryImage.mob_1_2x}
        />
        <GalleryItem
          size={"(max-width: 767.99px)"}
          image_1x={galleryImage.mob_2_1x}
          image_2x={galleryImage.mob_2_2x}
        />
        <GalleryItem
          size={"(max-width: 767.99px)"}
          image_1x={galleryImage.mob_3_1x}
          image_2x={galleryImage.mob_3_2x}
        />
        <GalleryItem
          size={"(max-width: 767.99px)"}
          image_1x={galleryImage.mob_4_1x}
          image_2x={galleryImage.mob_4_2x}
        />
        <GalleryItem
          size={"(max-width: 767.99px)"}
          image_1x={galleryImage.mob_5_1x}
          image_2x={galleryImage.mob_5_2x}
        />
        <GalleryItem
          size={"(max-width: 767.99px)"}
          image_1x={galleryImage.mob_6_1x}
          image_2x={galleryImage.mob_6_2x}
        />
        <GalleryItem
          size={"(max-width: 767.99px)"}
          image_1x={galleryImage.mob_7_1x}
          image_2x={galleryImage.mob_7_2x}
        />
        <GalleryItem
          size={"(max-width: 767.99px)"}
          image_1x={galleryImage.mob_8_1x}
          image_2x={galleryImage.mob_8_2x}
        />
      </CarouselSliders>
    </section>
  );
};

export default Gallery;
