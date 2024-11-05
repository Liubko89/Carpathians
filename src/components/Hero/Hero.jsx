import css from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={css.hero}>
      <h1 className={css.title}>Tours to the Carpathians from Lviv</h1>
      <p className={css.descr}>
        Journeys to the very heart of the Carpathians for those who want a real
        reboot
      </p>
      <button className={css.btn} type="button">
        Book a tour
      </button>
    </section>
  );
};

export default Hero;
