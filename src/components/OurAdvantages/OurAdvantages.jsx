import css from "./OurAdvantages.module.css";
import OurAdvantagesListItem from "../OurAdvantagesListItem/OurAdvantagesListItem";
import clsx from "clsx";
import LazyLoad from "react-lazyload";
import { useTranslation } from "react-i18next";

const OurAdvantages = () => {
  const { t } = useTranslation();

  return (
    <section className={clsx("section", css.OurAdvantagesSection)}>
      <h2 className="titleH2">{t("ourAdvantages.title")}</h2>
      <LazyLoad height={200} offset={100}>
        <ul className={css.list}>
          <OurAdvantagesListItem string={t("ourAdvantages.authorTours")} />
          <OurAdvantagesListItem
            string={t("ourAdvantages.individualApproach")}
          />
          <OurAdvantagesListItem string={t("ourAdvantages.affordablePrices")} />
          <OurAdvantagesListItem
            string={t("ourAdvantages.comfortableTransfer")}
          />
          <OurAdvantagesListItem
            string={t("ourAdvantages.professionalGuides")}
          />
          <OurAdvantagesListItem
            string={t("ourAdvantages.accommodationInHotels")}
          />
        </ul>
      </LazyLoad>
    </section>
  );
};

export default OurAdvantages;
