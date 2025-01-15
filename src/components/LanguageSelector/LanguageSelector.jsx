import { useTranslation } from "react-i18next";
import { useState } from "react";
import css from "./LanguageSelector.module.css";
import clsx from "clsx";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState(i18n.language);

  const changeLanguage = (language, e) => {
    e.stopPropagation();
    i18n.changeLanguage(language);
    setActiveLanguage(language);
  };

  const changeToEnglish = (e) => {
    changeLanguage("en", e);
  };

  const changeToPortuguese = (e) => {
    changeLanguage("pt", e);
  };

  return (
    <div className={css.wrapper}>
      <button
        className={clsx(
          css.btn,
          activeLanguage === "en" ? css.active : css.disabled
        )}
        onClick={changeToEnglish}
        type="button"
      >
        En
      </button>
      <button
        className={clsx(
          css.btn,
          activeLanguage === "pt" ? css.active : css.disabled
        )}
        onClick={changeToPortuguese}
        type="button"
      >
        Pt
      </button>
    </div>
  );
};

export default LanguageSelector;
