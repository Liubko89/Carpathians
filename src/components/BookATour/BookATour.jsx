import css from "./BookATour.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import icons from "../../assets/icons.svg";
import { validationSchema } from "../../helpers/schema";
import clsx from "clsx";
import CloseButton from "../CloseButton/CloseButton";
import { notify } from "../../helpers/notification";
import { useTranslation } from "react-i18next";

const BookATour = ({ closeModal, checkedTours, handleCheckboxChange }) => {
  const { t } = useTranslation();

  const initialValues = {
    name: "",
    phoneNumber: "",
    tours: [],
  };

  const handleSubmit = (values, actions) => {
    values.tours = checkedTours;
    notify(values);
    actions.resetForm();
    closeModal();
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>{t("bookATour")}</h2>
      <p className={css.description}>{t("modalBookATourMessage")}</p>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div className={css.inputErrorWrap}>
            <Field
              className={css.input}
              name="name"
              type="text"
              placeholder={t("bookingForm.name")}
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css.inputErrorWrap}>
            <Field
              className={css.input}
              name="phoneNumber"
              type="text"
              placeholder={t("bookingForm.number")}
            />
            <ErrorMessage
              className={css.error}
              name="phoneNumber"
              component="span"
            />
          </div>
          <div className={css.visuallyHidden} id="checkbox-group">
            Types of tours
          </div>
          <div
            className={css.checkboxWrapper}
            role="group"
            aria-labelledby="checkbox-group"
          >
            <label className={css.label}>
              <Field
                className={clsx(css.visuallyHidden, css.checkbox)}
                type="checkbox"
                name="tours"
                value="Ascent to Hoverla"
                checked={checkedTours.includes("tours.ascentToHoverla")}
                onChange={handleCheckboxChange}
              />
              <span className={css.customCheckbox}>
                <svg className={css.checkboxIcon} width="20" height="20">
                  <use href={`${icons}#icon-checkmark-outline`}></use>
                </svg>
              </span>
              {t("tours.ascentToHoverla")}
            </label>
            <label className={css.label}>
              <Field
                className={clsx(css.visuallyHidden, css.checkbox)}
                type="checkbox"
                name="tours"
                value="Ski tour to Bukovel"
                checked={checkedTours.includes("tours.skiTourToBukovel")}
                onChange={handleCheckboxChange}
              />
              <span className={css.customCheckbox}>
                <svg className={css.checkboxIcon} width="20" height="20">
                  <use href={`${icons}#icon-checkmark-outline`}></use>
                </svg>
              </span>
              {t("tours.skiTourToBukovel")}
            </label>
            <label className={css.label}>
              <Field
                className={clsx(css.visuallyHidden, css.checkbox)}
                type="checkbox"
                name="tours"
                value="Week in Carpathians"
                checked={checkedTours.includes("tours.weekInCarpathians")}
                onChange={handleCheckboxChange}
              />
              <span className={css.customCheckbox}>
                <svg className={css.checkboxIcon} width="20" height="20">
                  <use href={`${icons}#icon-checkmark-outline`}></use>
                </svg>
              </span>
              {t("tours.weekInCarpathians")}
            </label>
          </div>

          <button className="btn" type="submit">
            {t("callMe")}
          </button>
        </Form>
      </Formik>
      <CloseButton closeModal={closeModal} color="iconDark" />
    </div>
  );
};

export default BookATour;
