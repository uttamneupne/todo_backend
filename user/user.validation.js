import * as Yup from "yup";

export const registerUserValidation = Yup.object({
  firstName: Yup.string()
    .required("First name is required")
    .trim()
    .max(55, "First name must be at most 55 character"),

  lastName: Yup.string()
    .required("First name is required")
    .trim()
    .max(55, "First name must be at most 55 character"),
  email: Yup.string()
    .required("Email is required")
    .trim()
    .max(55, "Email must be at most 55 character")
    .lowercase(),
  password: Yup.string()
    .min(4, "Password must be at least 4 character")
    .max(16, "Password must ne at max 16 characters.")
    .required(),
  gender: Yup.string().oneOf(["male", "female", "preferNotToSay"]),
});
