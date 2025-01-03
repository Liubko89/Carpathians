import css from "./OurAdvantages.module.css";
import OurAdvantagesListItem from "../OurAdvantagesListItem/OurAdvantagesListItem";
import clsx from "clsx";

const OurAdvantages = () => {
  return (
    <section className={clsx("section", css.OurAdvantagesSection)}>
      <h2 className="titleH2">Our advantages</h2>
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
