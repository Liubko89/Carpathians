import Carousel from "react-multi-carousel";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

const CarouselSliders = ({ children, showDots = false }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 6000, min: 1440 },
      items: 1,
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
      customButtonGroup={<ButtonGroup />}
      showDots={showDots}
    >
      {children}
    </Carousel>
  );
};

export default CarouselSliders;
