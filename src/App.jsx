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
import HeroWrapper from "./components/HeroWrapper/HeroWrapper";

function App() {
  return (
    <div>
      <HeroWrapper>
        <Header />
        <Hero />
      </HeroWrapper>
      <Container>
        <main>
          <AboutUs />
          <OurAdvantages />
          <UpcomingTours />
          <Reviews />
          <Gallery />
          {/* <Questions /> */}
        </main>
        {/* <Footer /> */}
      </Container>
    </div>
  );
}

export default App;
