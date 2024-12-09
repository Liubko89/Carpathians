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

function App() {
  return (
    <>
      <Header />
      <main>
        <Container heroWrapper>
          <Hero />
        </Container>
        <Container>
          <AboutUs />
          <OurAdvantages />
          <UpcomingTours />
          <Reviews />
          <Gallery />
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
