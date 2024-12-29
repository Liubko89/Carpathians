import Slider from "react-slick";
import SliderArrow from "../SliderArrow/SliderArrow";

const SlickCarousel = ({ viewportWidth, list, children, slides = null }) => {
  const handleSlides = () => {
    if (viewportWidth < 768) {
      return 1;
    } else if (viewportWidth < 1440) {
      return 2;
    } else {
      return 3;
    }
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slides ? slides : handleSlides(),
    slidesToScroll: slides ? slides : handleSlides(),
    prevArrow: <SliderArrow direction="prev" />,
    nextArrow: (
      <SliderArrow
        direction="next"
        listLength={list.length - (slides ? slides : handleSlides())}
      />
    ),
  };
  return (
    <ul>
      <Slider {...settings}>{children}</Slider>
    </ul>
  );
};

export default SlickCarousel;
