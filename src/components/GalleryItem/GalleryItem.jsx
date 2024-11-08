const GalleryItem = ({ size, image_1x, image_2x }) => {
  return (
    <picture>
      <source media={size} srcSet={`${image_1x} 1x, ${image_2x} 2x`} />
      <img src={image_1x} />
    </picture>
  );
};

export default GalleryItem;
