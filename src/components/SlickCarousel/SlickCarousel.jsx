import Slider from "react-slick";
import SliderArrow from "../SliderArrow/SliderArrow";

const SlickCarousel = ({
  viewportWidth,
  list,
  children,
  slides = null,
  hideArrows = false,
  appendCustomDots = false,
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
    slidesToShow: slides ? slides : handleSlides(),
    slidesToScroll: slides ? slides : handleSlides(),
    arrows: hideArrows ? false : true,
    prevArrow: <SliderArrow direction="prev" />,
    nextArrow: (
      <SliderArrow
        direction="next"
        listLength={list.length - (slides ? slides : handleSlides())}
      />
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
