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
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="span" />
            <Field name="phoneNumber" type="text" />
            <ErrorMessage name="phoneNumber" component="span" />
            <Field name="question" as="textarea" />
            <ErrorMessage name="question" component="span" />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default Questions;
