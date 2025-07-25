import * as Yup from "yup";

const SUPPORTED_FORMATS = [
  "application/pdf",
  "application/msword", // .doc
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
  "image/png",
  "image/jpeg", // .jpg & .jpeg
];

const fileValidation = (fieldName: string) =>
  Yup.mixed()
    .required(`${fieldName} is required`)
    .test(
      "fileFormat",
      `${fieldName} must be a PDF, DOC, DOCX, PNG, or JPG file`,
      (value: { type?: string } | null) => {
        if (!value || !value.type) return false;
        return SUPPORTED_FORMATS.includes(value.type);
      }
    );

export const registerSchema = Yup.object().shape({
  full_name: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  dob: Yup.string().required("Date of birth is required"),
  work_experience: Yup.string().required("Work experience is required"),

  aadhaar: fileValidation("Aadhaar"),
  pan: fileValidation("PAN"),
  ssc: fileValidation("SSC"),
  hsc: fileValidation("HSC"),
  degree: fileValidation("Degree"),
});

export const adminloginSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
});
