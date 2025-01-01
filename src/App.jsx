import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import OurAdvantages from "./components/OurAdvantages/OurAdvantages";
import Questions from "./components/Questions/Questions";
import Reviews from "./components/Reviews/Reviews";
import UpcomingTours from "./components/UpcomingTours/UpcomingTours";
import Container from "./components/Container/Container";
import { useEffect, useState } from "react";
import ScrollToTopBtn from "./components/ScrollToTopBtn/ScrollToTopBtn";

function App() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [scrolledFromTop, setScrolledFromTop] = useState(window.scrollY);
  const [preventScrolling, setPreventScrolling] = useState(false);

  const blockScrolling = () => setPreventScrolling(true);
  const allowScrolling = () => setPreventScrolling(false);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledFromTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    preventScrolling
      ? document.body.classList.add("preventScrolling")
      : document.body.classList.remove("preventScrolling");
  }, [preventScrolling]);

  return (
    <>
      <Header
        viewportWidth={viewportWidth}
        blockScrolling={blockScrolling}
        allowScrolling={allowScrolling}
      />
      <main>
        <Container heroWrapper>
          <Hero
            blockScrolling={blockScrolling}
            allowScrolling={allowScrolling}
          />
        </Container>
        <Container>
          <AboutUs />
          <OurAdvantages />
          <UpcomingTours
            blockScrolling={blockScrolling}
            allowScrolling={allowScrolling}
            viewportWidth={viewportWidth}
          />
          <Reviews viewportWidth={viewportWidth} />
          <Gallery viewportWidth={viewportWidth} />
        </Container>
        <Container footerWrapper>
          <Questions />
        </Container>
      </main>
      <Container footerWrapper>
        <Footer />
      </Container>
      {scrolledFromTop > viewportHeight && !preventScrolling && (
        <ScrollToTopBtn />
      )}
    </>
  );
}

export default App;
