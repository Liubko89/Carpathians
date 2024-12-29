import css from "./GalleryItem.module.css";

const GalleryItem = ({
  image_1x,
  image_2x,
  imageTab_1x,
  imageTab_2x,
  imageDesk_1x,
  imageDesk_2x,
}) => {
  return (
    <picture className={css.galleryItem}>
      <source
        media="(min-width: 1440px)"
        srcSet={`${imageDesk_1x} 1x, ${imageDesk_2x} 2x`}
      />
      <source
        media="(min-width: 768px)"
        srcSet={`${imageTab_1x} 1x, ${imageTab_2x} 2x`}
      />
      <source
        media="(max-width: 767.99px)"
        srcSet={`${image_1x} 1x, ${image_2x} 2x`}
      />
      <img src={image_1x} />
    </picture>
  );
};

export default GalleryItem;
