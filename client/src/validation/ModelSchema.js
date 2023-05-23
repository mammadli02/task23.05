import * as yup from "yup";

export const ModelValidation = yup.object().shape({
  name: yup.string().required("name is required"),
  parag: yup
  .string().required("name is required"),
  imageURL: yup
    .string()
    .required("image is required"),
});