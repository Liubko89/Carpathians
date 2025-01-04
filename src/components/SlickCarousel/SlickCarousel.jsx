import Slider from "react-slick";
import SliderArrow from "../SliderArrow/SliderArrow";
import TourDetailsSliderArrowPrev from "../TourDetailsSliderArrow/TourDetailsSliderArrowPrev";
import TourDetailsSliderArrowNext from "../TourDetailsSliderArrow/TourDetailsSliderArrowNext";

const SlickCarousel = ({
  viewportWidth,
  list,
  children,
  slides = null,
  appendCustomDots = false,
  hideArrows = false,
  insideArrows = false,
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
    arrows: hideArrows ? false : true,
    slidesToShow: slides ? slides : handleSlides(),
    slidesToScroll: slides ? slides : handleSlides(),
    prevArrow: !insideArrows ? (
      <SliderArrow direction="prev" />
    ) : (
      <TourDetailsSliderArrowPrev />
    ),
    nextArrow: !insideArrows ? (
      <SliderArrow
        direction="next"
        listLength={list.length - (slides ? slides : handleSlides())}
      />
    ) : (
      <TourDetailsSliderArrowNext />
    ),
  };

  const customDots = {
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "transparent",
          position: "absolute",
          bottom: "20px",
          left: "center",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <ul>
      {!appendCustomDots ? (
        <Slider {...settings}>{children}</Slider>
      ) : (
        <Slider {...settings} {...customDots}>
          {children}
        </Slider>
      )}
    </ul>
  );
};

export default SlickCarousel;
