import css from "./Questions.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { validationSchema } from "../../helpers/schema";
import { notify } from "../../helpers/notification";
import { useTranslation } from "react-i18next";

const Questions = () => {
  const { t } = useTranslation();
  const initialValues = { name: "", phoneNumber: "", question: "" };
  const handleSubmit = (values, actions) => {
    notify(values);
    actions.resetForm();
  };
  return (
    <section className={css.section}>
      <div className={css.wrapper}>
        <h2 className={css.title}>{t("questions.title")}</h2>
        <p className={css.descr}>{t("questions.description")}</p>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <div className={css.inputWrapper}>
              <Field
                className={css.input}
                name="name"
                type="text"
                placeholder={t("questions.form.name")}
              />
              <ErrorMessage
                className={css.error}
                name="name"
                component="span"
              />
            </div>
            <div className={css.inputWrapper}>
              <Field
                className={css.input}
                name="phoneNumber"
                type="text"
                placeholder={t("questions.form.number")}
              />
              <ErrorMessage
                className={css.error}
                name="phoneNumber"
                component="span"
              />
            </div>
            <div className={css.textareaWrapper}>
              <Field
                className={css.textarea}
                name="question"
                as="textarea"
                placeholder={t("questions.form.question")}
              />
            </div>
            <button className={css.btn} type="submit">
              {t("callMe")}
            </button>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default Questions;
