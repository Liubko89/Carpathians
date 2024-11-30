import Carousel from "react-multi-carousel";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

const CarouselSliders = ({ children, slide, showDots = false }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 1440, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 375 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 375, min: 1 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      arrows={false}
      renderButtonGroupOutside={true}
      customButtonGroup={<ButtonGroup slide={slide} />}
      showDots={showDots}
    >
      {children}
    </Carousel>
  );
};

export default CarouselSliders;
