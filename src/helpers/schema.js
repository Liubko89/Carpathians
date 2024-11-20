import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phoneNumber: Yup.string()
    .min(3, "Contact number must be at least 3 characters!")
    .max(50, "Contact number must be less than 50 characters!")
    .matches(/^[0-9]+$/, "You are allowed to type only numbers ")
    .required("Contact number is required!"),
  question: Yup.string()
    .min(2, "Too Short!")
    .max(150, "Too Long!")
    .required("Required"),
});
