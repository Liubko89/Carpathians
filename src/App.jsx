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

function App() {
  const viewportWidth = window.innerWidth;

  const [preventScrolling, setPreventScrolling] = useState(false);
  const blockScrolling = () => setPreventScrolling(true);
  const allowScrolling = () => setPreventScrolling(false);

  useEffect(() => {
    preventScrolling
      ? document.body.classList.add("preventScrolling")
      : document.body.classList.remove("preventScrolling");
  }, [preventScrolling]);

  return (
    <>
      <Header blockScrolling={blockScrolling} allowScrolling={allowScrolling} />
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
          <UpcomingTours viewportWidth={viewportWidth} />
          <Reviews />
          <Gallery viewportWidth={viewportWidth} />
        </Container>
        <Container footerWrapper>
          <Questions />
        </Container>
      </main>
      <Container footerWrapper>
        <Footer />
      </Container>
    </>
  );
}

export default App;
