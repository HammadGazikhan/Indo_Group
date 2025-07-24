import employeeModal from "../../models/employee.modal.js";
import { sendEmail } from "../../utils/emailService/emailService.js";
// import generateToken from "../../utils/generateTokens/generateToken.js";

// Register employee with file upload
export const registerEmployee = async (req, res) => {
  try {
    const { full_name, email, phone, dob, work_experience } = req.body;

    const documents = {
      aadhaar: req.files?.aadhaar?.[0]?.path,
      pan: req.files?.pan?.[0]?.path,
      ssc: req.files?.ssc?.[0]?.path,
      hsc: req.files?.hsc?.[0]?.path,
      degree: req.files?.degree?.[0]?.path,
    };

    if (
      !full_name ||
      !email ||
      !phone ||
      !dob ||
      !work_experience ||
      !documents.aadhaar ||
      !documents.pan ||
      !documents.ssc ||
      !documents.hsc ||
      !documents.degree
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists with this phone
    const user = await employeeModal.findOne({
      email: email,
      phone: phone,
    });

    if (user?.email) {
      return res
        .status(409)
        .json({ message: "User with this email already exists" });
    }

    // Check if user already exists with this email
    // const existEmail = await employeeModal.findOne({
    //   email: email,
    // });
    if (user?.phone) {
      return res
        .status(409)
        .json({ message: "User with this phone number already exists" });
    }
    // Create new employee
    const newEmployee = await employeeModal.create({
      full_name,
      email,
      phone,
      dob,
      work_experience,
      documents,
    });

    // ✅ Send registration confirmation email
    try {
      await sendEmail({
        to: email,
        subject: "Registration Successful - Thank You",
        text: `Hi ${full_name},\n\nThank you for registering with us. Our team will review your details shortly. You will receive your joining letter or status update via email once the review is complete.\n\nRegards,\nHR Team`,
      });
    } catch (emailErr) {
      console.error("Email send failed:", emailErr.message);
      // Not failing the request, just logging the issue
    }

    res.status(201).json({
      message: "Registration successful. Confirmation email sent.",
      employeeId: newEmployee._id,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error registering employee", error: err.message });
  }
};

// Login employee
// export const loginEmployee =loginEmployee async (req, res) => {
//   try {
//     const { phone, dob } = req.body;
//     const employee = await employeeModal.findOne({ phone, dob });

//     if (!employee)
//       return res.status(401).json({ message: "Invalid credentials" });

//     if (employee.isApproved === "pending") {
//       return res.status(403).json({ message: "Registration not approved yet" });
//     }
//     if (employee.isApproved === "rejected") {
//       return res
//         .status(403)
//         .json({ message: "Registration rejected, try again later" });
//     }
//     if (employee.isApproved === "approved") {
//       const token = generateToken(employee);

//       res.status(200).json({
//         message: "Login successful",
//         employee,
//         token,
//       });
//     }
//   } catch (err) {
//     res.status(500).json({ message: "Login failed", error: err.message });
//   }
// };
