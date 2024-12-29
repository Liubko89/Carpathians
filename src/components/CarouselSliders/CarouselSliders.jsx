import Carousel from "react-multi-carousel";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

const CarouselSliders = ({ children, showDots = false, viewportWidth }) => {
  const handleSlides = viewportWidth < 768 ? 2 : 1;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1440 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1439.9, min: 1439.1 },
      items: 3,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1439, min: 768 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 1 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      arrows={false}
      renderButtonGroupOutside={true}
      customButtonGroup={<ButtonGroup handleSlides={handleSlides} />}
      showDots={showDots}
    >
      {children}
    </Carousel>
  );
};

export default CarouselSliders;
