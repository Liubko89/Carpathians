import clsx from "clsx";
import css from "./AboutUs.module.css";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <section className={clsx("section", css.aboutUsSection)} id="aboutUs">
      <h2 className="titleH2">{t("nav.aboutUs")}</h2>
      <p className={css.firstParagraph}>{t("aboutUs.p1")}</p>
      <p className={css.secondParagraph}>{t("aboutUs.p2")}</p>
    </section>
  );
};

export default AboutUs;
