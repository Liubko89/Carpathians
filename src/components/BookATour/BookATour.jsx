import css from "./BookATour.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import icons from "../../assets/icons.svg";
import { validationSchema } from "../../helpers/schema";
import clsx from "clsx";
import CloseButton from "../CloseButton/CloseButton";

const BookATour = ({ closeModal }) => {
  const initialValues = {
    name: "",
    phoneNumber: "",
    typeOfTour: [],
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
    closeModal();
  };
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Book a tour</h2>
      <p className={css.description}>
        You can leave your application here and our manager will call you within
        10 minutes
      </p>

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
              placeholder="Your name*"
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css.inputErrorWrap}>
            <Field
              className={css.input}
              name="phoneNumber"
              type="text"
              placeholder="Phone number*"
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
                name="typeOfTour"
                value="Ascent to Hoverla"
              />
              <span className={css.customCheckbox}>
                <svg className={css.checkboxIcon} width="20" height="20">
                  <use href={`${icons}#icon-checkmark-outline`}></use>
                </svg>
              </span>
              Ascent to Hoverla
            </label>
            <label className={css.label}>
              <Field
                className={clsx(css.visuallyHidden, css.checkbox)}
                type="checkbox"
                name="typeOfTour"
                value="Ski tour to Bukovel"
              />
              <span className={css.customCheckbox}>
                <svg className={css.checkboxIcon} width="20" height="20">
                  <use href={`${icons}#icon-checkmark-outline`}></use>
                </svg>
              </span>
              Ski tour to Bukovel
            </label>
            <label className={css.label}>
              <Field
                className={clsx(css.visuallyHidden, css.checkbox)}
                type="checkbox"
                name="typeOfTour"
                value="Week in Carpathians"
              />
              <span className={css.customCheckbox}>
                <svg className={css.checkboxIcon} width="20" height="20">
                  <use href={`${icons}#icon-checkmark-outline`}></use>
                </svg>
              </span>
              Week in Carpathians
            </label>
          </div>

          <button className="btn" type="submit">
            Call Me
          </button>
        </Form>
      </Formik>
      <CloseButton closeModal={closeModal} color="iconDark" />
    </div>
  );
};

export default BookATour;
