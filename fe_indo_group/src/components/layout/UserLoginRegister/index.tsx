import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Formik, Form } from "formik";
import toast from "react-hot-toast";
import {
  FiUser,
  FiLock,
  FiMail,
  FiPhone,
  FiCalendar,
  FiBriefcase,
} from "react-icons/fi";
import { adminloginSchema, registerSchema } from "../../../schemas/auth";
import { LoginFormValues, RegisterData } from "../../../interface/auth";
import { useAdminLogin } from "../../../hooks/adminAuth";
import { useRegister } from "../../../hooks/userAuth";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../context/UserContext";
import PrimaryButton from "../../inputs/primaryButton/Index";
import InputField from "../../inputs/custom-input";
import CustomFileUpload from "../../inputs/custom-dragDrop";
import { theme } from "../../../constants/theme";
import SecondaryButton from "../../inputs/secondaryButton/Index";
import Cookies from "js-cookie";

const EmployeeAuth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const { setUser } = useUser();
  const { mutate: adminLoginMutation, isPending } = useAdminLogin();
  const { mutate: registerMutation, isPending: Loading } = useRegister();
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
    setRegistrationSuccess(false);
  };

  useEffect(() => {
    if (isLogin) {
      const token = Cookies.get("token");
      if (token) {
        navigate("/admin/dashboard");
      }
    }
  }, [isLogin, navigate]); // also include navigate in deps for good practice

  const documentFields = [
    { name: "aadhaar", label: "Aadhaar Card" },
    { name: "pan", label: "PAN Card" },
    { name: "ssc", label: "SSC Certificate" },
    { name: "hsc", label: "HSC Certificate" },
    { name: "degree", label: "Degree Certificate" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-2 py-10">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-md overflow-hidden">
        <div className="w-full p-6 sm:p-10 max-h-screen overflow-y-auto">
          <div className="text-center mb-6">
            <h2
              style={{
                color: theme.colors.dark,
                fontFamily: theme.typography.fontFamilyHeading,
                fontWeight: theme.typography.fontWeight.ExtraBold,
              }}
              className="mb-10 text-[2.2rem] md:text-[2.7rem] leading-10 md:leading-[42px]  md:mb-6  lg:text-[3.2rem]"
            >
              {registrationSuccess
                ? "Registration Complete!"
                : isLogin
                ? "Admin Login"
                : "Join the Manpower Team"}
            </h2>
            <p
              style={{
                fontWeight: theme.typography.fontWeight.regular,
                fontFamily: theme.typography.fontFamily,
                color: theme.colors.primaryLight,
              }}
              className="md:text-[1.125rem] text-center text-[1rem]"
            >
              {registrationSuccess
                ? "Our HR will connect with you shortly via email."
                : isLogin
                ? "Login to manage admin dashboard"
                : "Submit details, and HR will contact you."}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!registrationSuccess ? (
              <motion.div
                key={isLogin ? "login-form" : "register-form"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {isLogin ? (
                  <Formik<LoginFormValues>
                    initialValues={{ email: "", password: "" }}
                    validationSchema={adminloginSchema}
                    onSubmit={(values) => {
                      adminLoginMutation(values as any, {
                        onSuccess: (res) => {
                          toast.success(res.message);
                          setUser(res.admin, res.token);
                          navigate("/admin/dashboard");
                        },
                        onError: (err: any) => {
                          toast.error(
                            err?.response?.data?.message || "Login failed"
                          );
                        },
                      });
                    }}
                  >
                    <Form className="space-y-4 max-w-md mx-auto">
                      <InputField
                        name="email"
                        label="Email"
                        icon={<FiMail />}
                      />
                      <InputField
                        name="password"
                        label="Password"
                        type="password"
                        icon={<FiLock />}
                      />
                      <div className="w-full flex justify-center gap-4 !mt-4">
                        <PrimaryButton type="submit" disabled={isPending}>
                          {isPending ? "Logging In..." : "Login"}
                        </PrimaryButton>
                        <SecondaryButton
                          onClick={() => navigate("/")}
                          sx={{
                            border: "1px solid ",
                            borderColor: theme.colors.border,
                          }}
                        >
                          Back{" "}
                        </SecondaryButton>
                      </div>
                    </Form>
                  </Formik>
                ) : (
                  <Formik<RegisterData>
                    initialValues={{
                      full_name: "",
                      email: "",
                      phone: "",
                      dob: "",
                      work_experience: "",
                      aadhaar: null,
                      pan: null,
                      ssc: null,
                      hsc: null,
                      degree: null,
                    }}
                    validationSchema={registerSchema}
                    onSubmit={(values) => {
                      registerMutation(values, {
                        onSuccess: (res) => {
                          toast.success(res.message || "Registration success");
                          setRegistrationSuccess(true);
                        },
                        onError: (err: any) => {
                          toast.error(
                            err?.response?.data?.message ||
                              "Registration failed"
                          );
                        },
                      });
                    }}
                  >
                    {({ setFieldValue }) => (
                      <Form className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                          <InputField
                            name="full_name"
                            label="Full Name"
                            icon={<FiUser />}
                          />
                          <InputField
                            name="email"
                            label="Email"
                            type="email"
                            icon={<FiMail />}
                          />
                          <InputField
                            name="phone"
                            type="tel"
                            placeholder="Enter phone number"
                            label="Phone Number"
                            icon={<FiPhone />}
                          />
                          <InputField
                            name="dob"
                            placeholder="Enter date of birth"
                            label="Date of Birth"
                            type="date"
                            icon={<FiCalendar />}
                          />
                          <InputField
                            type="number"
                            name="work_experience"
                            label="Work Experience"
                            icon={<FiBriefcase />}
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                          {documentFields.map(({ name, label }) => (
                            <CustomFileUpload
                              setFieldValue={setFieldValue}
                              name={name}
                              label={label}
                            />
                          ))}
                        </div>
                        <div className="w-full flex justify-center gap-4 !mt-8 mx-auto">
                          <PrimaryButton
                            type="submit"
                            isLoading={Loading}
                            disabled={Loading}
                          >
                            {Loading ? "Submitting..." : "Register"}
                          </PrimaryButton>
                          <SecondaryButton
                            onClick={() => navigate("/")}
                            sx={{
                              border: "1px solid ",
                              borderColor: theme.colors.border,
                            }}
                          >
                            Back{" "}
                          </SecondaryButton>
                        </div>
                      </Form>
                    )}
                  </Formik>
                )}
              </motion.div>
            ) : (
              <div className="text-center p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
                <div className="mb-4 animate-bounce">
                  <svg
                    className="w-16 h-16 mx-auto text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-3">
                  Thank you! 🎉
                </h3>
                <div className="flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 mr-2 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <p className="text-gray-600">
                    Our HR team will reach out to you shortly via email.
                  </p>
                </div>
                <PrimaryButton
                  className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition duration-200 flex items-center justify-center mx-auto"
                  onClick={() => navigate("/")}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    ></path>
                  </svg>
                  Go Home
                </PrimaryButton>
              </div>
            )}
          </AnimatePresence>

          {!registrationSuccess && (
            <div className="mt-6 text-center text-sm md:text-base">
              <button
                onClick={toggleForm}
                style={{ color: theme.colors.border }}
                className=" hover:underline"
              >
                {isLogin
                  ? "Don't have an account? Register"
                  : "Already an admin? Login"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeAuth;
