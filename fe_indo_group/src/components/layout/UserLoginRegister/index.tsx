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
  const [isLogin, setIsLogin] = useState(true);
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
            <FiUser className="text-3xl text-indigo-600 mx-auto mb-2" />
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
                        onSuccess: () => {
                          toast.success("Registered successfully");
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
              <div className="text-center">
                <h3 className="text-xl font-bold text-green-600 mb-2">
                  ✅ Thank you!
                </h3>
                <p className="text-gray-600">
                  Our HR team will reach out to you shortly via email.
                </p>
                <PrimaryButton className="mt-4" onClick={() => navigate("/")}>
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
