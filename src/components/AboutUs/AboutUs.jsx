import clsx from "clsx";
import css from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <section className={clsx("section", css.aboutUsSection)} id="aboutUs">
      <h2 className="titleH2">About us</h2>
      <p className={css.firstParagraph}>
        Travel is our life. We have been organizing tours to the Carpathians
        since 2007 and have never been bored for a single day. The Carpathians
        are many interesting and unexplored places that are worth visiting and
        showing them to others.
      </p>
      <p className={css.secondParagraph}>
        Coming to the Carpathians will make you forget about the polluted, noisy
        world and enjoy untouched nature. From picturesque forests to clean
        rivers and lakes and Carpathian streams between the mountains, which
        offer magical landscapes and allow you to forget about all problems and
        unnecessary thoughts.
      </p>
    </section>
  );
};

export default AboutUs;
