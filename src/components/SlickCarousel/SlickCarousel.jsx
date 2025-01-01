import Slider from "react-slick";
import SliderArrow from "../SliderArrow/SliderArrow";

const SlickCarousel = ({
  viewportWidth,
  list,
  children,
  slides = null,
  customWidth = false,
  hideArrows = false,
}) => {
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
    variableWidth: customWidth ? true : false,
    slidesToShow: slides ? slides : handleSlides(),
    slidesToScroll: slides ? slides : handleSlides(),
    prevArrow: <SliderArrow direction="prev" />,
    nextArrow: (
      <SliderArrow
        direction="next"
        listLength={list.length - (slides ? slides : handleSlides())}
      />
    ),
    arrows: hideArrows ? false : true,
  };
  return (
    <ul>
      <Slider {...settings}>{children}</Slider>
    </ul>
  );
};

export default SlickCarousel;
