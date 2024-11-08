import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./Questions.module.css";

const Questions = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    phoneNumber: Yup.string()
      .min(3, "Contact number must be at least 3 characters!")
      .max(50, "Contact number must be less than 50 characters!")
      .matches(/^[0-9]+$/, "You are allowed to type only numbers ")
      .required("Contact number is required!"),
  });

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
            <Field name="question" as="textarea" />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default Questions;
