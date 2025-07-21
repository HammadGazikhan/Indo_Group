import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  full_name: Yup.string().required("Full name is required"),
  email: Yup.string().email().required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  dob: Yup.string().required("Date of birth is required"),
  work_experience: Yup.string().required("Work experience is required"),
  aadhaar: Yup.mixed().required("Aadhaar is required"),
  pan: Yup.mixed().required("PAN is required"),
  ssc: Yup.mixed().required("SSC is required"),
  hsc: Yup.mixed().required("HSC is required"),
  degree: Yup.mixed().required("Degree is required"),
});

export const adminloginSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
});
