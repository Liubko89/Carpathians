import css from "./OurAdvantages.module.css";
import OurAdvantagesListItem from "../OurAdvantagesListItem/OurAdvantagesListItem";

const OurAdvantages = () => {
  return (
    <section className={css.OurAdvantagesSection}>
      <h2 className={css.title}>Our advantages</h2>
      <ul className={css.list}>
        <OurAdvantagesListItem string={"author's tours"} />
        <OurAdvantagesListItem string={"individual approach"} />
        <OurAdvantagesListItem string={"affordable prices"} />
        <OurAdvantagesListItem string={"comfortable transfer"} />
        <OurAdvantagesListItem string={"professional guides"} />
        <OurAdvantagesListItem string={"accommodation in hotels from 3+ *"} />
      </ul>
    </section>
  );
};

export default OurAdvantages;
