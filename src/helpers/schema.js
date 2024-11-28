import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phoneNumber: Yup.string()
    .matches(/^\+?\d+$/, "Only numbers, please!")
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required!"),
});
