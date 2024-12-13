import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./Questions.module.css";
import { validationSchema } from "../../helpers/schema";

const Questions = () => {
  const initialValues = { name: "", phoneNumber: "", question: "" };
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <section className={css.section}>
      <div className={css.wrapper}>
        <h2 className={css.title}>Do you have any questions?</h2>
        <p className={css.descr}>
          You can leave your questions here and our manager will call you back
          within 10 minutes
        </p>
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
                placeholder="Your name*"
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
                placeholder="Phone number*"
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
                placeholder="What would you like to know?"
              />
            </div>
            <button className={css.btn} type="submit">
              Call me
            </button>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default Questions;
