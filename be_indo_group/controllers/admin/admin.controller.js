import employeeModal from "../../models/employee.modal.js";
import bcrypt from "bcrypt";
import generateToken from "../../utils/generateTokens/generateToken.js";
import adminModal from "../../models/admin.modal.js";
import { sendEmail } from "../../utils/emailService/emailService.js";
import e from "cors";

//Create admin
export const createAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    bcrypt.genSalt(10, async (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "Error creating admin", error: err.message });
        }
        const adminExists = await adminModal.find();
        if (adminExists.length > 0)
          return res.status(400).json({ message: "Admin already created" });

        await adminModal.create({ email, password: hash });
        res.status(201).json({ message: "Admin created successfully" });
      });
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating admin", error: err.message });
  }
};

//Admin login
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await adminModal.findOne({ email });
    if (!admin) return res.status(401).json({ message: "Invalid credentials" });
    bcrypt.compare(password, admin.password, (err, result) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error logging in admin", error: err.message });
      }
      if (!result) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      if (result) {
        const token = generateToken(admin);
        res.status(200).json({ token, message: "Login successful", admin });
      }
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error logging in admin", error: err.message });
  }
};

//Get all employees
export const getAllEmployees = async (req, res) => {
  try {
    const employees = await employeeModal.find();
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching employees",
      error: err.message,
    });
  }
};

export const getSingleEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await employeeModal.findById(id);
    if (!employee)
      return res.status(404).json({ message: "Employee not found" });
    res.status(200).json(employee);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching employee", error: err.message });
  }
};

// Get all pending employees
export const getPendingEmployees = async (req, res) => {
  try {
    const employees = await employeeModal.find({ isApproved: "pending" });
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching pending employees",
      error: err.message,
    });
  }
};

// Approve or reject employee
export const verifyEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const { isApproved } = req.body;

    const employee = await employeeModal.findById(employeeId);
    if (!employee)
      return res.status(404).json({ message: "Employee not found" });

    // ✅ Set approval status
    employee.isApproved = isApproved;

    // ✅ Initialize adminDocuments if not exists
    if (!employee.adminDocuments) {
      employee.adminDocuments = {};
    }

    // ✅ Handle Approval and Attach Joining Letter
    if (isApproved === "approved" && req.files?.joiningLetter?.[0]) {
      const filePath = req.files.joiningLetter[0].path;

      employee.adminDocuments.joiningLetter = filePath;
      employee.joiningLetterSent = true;
      employee.joiningLetterSentAt = new Date();

      // ✅ Send email with joining letter
      await sendEmail({
        to: employee.email,
        subject: "Your Joining Letter",
        text: `Hi ${employee.full_name},\n\nCongratulations! Your employment has been approved.\nPlease find your joining letter attached.\n\nBest regards,\nHR Team`,
        attachments: [{ path: filePath }],
      });
    }

    // ✅ Handle Rejection
    if (isApproved === "rejected") {
      employee.rejectedAt = new Date();
    }

    // ✅ Save updated employee
    await employee.save();

    res.status(200).json({ message: `Employee ${isApproved}` });
  } catch (err) {
    console.error("Approval Error:", err);
    res
      .status(500)
      .json({ message: "Error verifying employee", error: err.message });
  }
};

// Get all approved employees
export const getApprovedEmployees = async (req, res) => {
  try {
    const employees = await employeeModal.find({
      isApproved: "approved",
      terminationLetterSent: false,
    });
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching approved employees",
      error: err.message,
    });
  }
};

// Get all rejected employees
export const getRejectedEmployees = async (req, res) => {
  try {
    const employees = await employeeModal.find({ isApproved: "rejected" });
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching rejected employees",
      error: err.message,
    });
  }
};
export const getAdminDashboardStats = async (req, res) => {
  try {
    const [
      totalEmployees,
      approvedEmployees,
      rejectedEmployees,
      pendingEmployees,
      terminatedEmployees,
    ] = await Promise.all([
      employeeModal.countDocuments(),
      employeeModal.countDocuments({ isApproved: "approved" }),
      employeeModal.countDocuments({ isApproved: "rejected" }),
      employeeModal.countDocuments({ isApproved: "pending" }),
      employeeModal.countDocuments({ terminationLetterSent: true }),
    ]);

    res.status(200).json({
      totalEmployees,
      approvedEmployees,
      rejectedEmployees,
      pendingEmployees,
      terminatedEmployees,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error fetching dashboard stats",
      error: err.message,
    });
  }
};

export const sendSalarySlip = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const { month } = req.body;
    const filePath = req.file?.path;

    const employee = await employeeModal.findById(employeeId);
    if (!employee || !filePath)
      return res.status(400).json({ message: "Invalid request" });

    // Add new slip to salarySlips
    employee.salarySlips.push({
      month,
      sentAt: new Date(),
      filePath, // <--- add this if not stored already
    });

    await employee.save();

    // Send Email with attachment
    await sendEmail({
      to: employee.email,
      subject: `Salary Slip for ${month}`,
      text: `Hi ${employee.full_name},\n\nPlease find your salary slip for ${month} attached.\n\nRegards,\nHR`,
      attachments: [{ path: filePath }],
    });

    res.status(200).json({ message: "Salary slip sent successfully" });
  } catch (err) {
    console.error("Salary Slip Error:", err);
    res
      .status(500)
      .json({ message: "Failed to send slip", error: err.message });
  }
};

export const terminateEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const file = req.file;

    if (!file) {
      return res
        .status(400)
        .json({ message: "Termination letter is required" });
    }

    const employee = await employeeModal.findById(employeeId);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    employee.isApproved = "terminated";
    employee.terminatedAt = new Date();
    employee.terminationLetterSent = true;
    employee.terminationLetterSentAt = new Date();
    employee.rejoinLetterSent = false;
    employee.rejoinLetterSentAt = null;
    await employee.save();

    // Send email
    await sendEmail({
      to: employee.email,
      subject: "Termination Notice",
      text: `Dear ${employee.full_name},\n\nWe regret to inform you that your employment has been terminated. Please find the attached termination letter.\n\nRegards,\nAdmin`,
      attachments: [
        {
          filename: file.originalname,
          path: file.path,
        },
      ],
    });

    res.status(200).json({ message: "Employee terminated and email sent." });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error terminating employee", error: err.message });
  }
};

//Get terminated employee
export const getTerminatedEmployees = async (req, res) => {
  try {
    const employees = await employeeModal.find({ terminationLetterSent: true });
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching terminated employees",
      error: err.message,
    });
  }
};

//Reappoint employee
export const rejoinEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const file = req.file;
    console.log("===========>>>>", file);
    if (!file) {
      return res
        .status(400)
        .json({ message: "Termination letter is required" });
    }

    const employee = await employeeModal.findById(employeeId);
    if (!employee || !file)
      return res.status(400).json({ message: "Invalid request" });

    // Update employee rejoin details
    employee.isApproved = "approved";
    employee.rejoinLetterSent = true;
    employee.terminationLetterSent = false;
    employee.joiningLetterSent = false;
    employee.rejoinLetterSentAt = new Date();
    employee.terminationLetterSent = null;
    employee.terminationLetterSentAt = false;
    employee.rejoinLetterUrl = "/" + file?.path;

    await employee.save();

    // Send rejoining letter email
    await sendEmail({
      to: employee.email,
      subject: `Rejoining Letter - Welcome Back!`,
      text: `Hi ${employee.full_name},\n\nWelcome back to the team! Please find your rejoining letter attached.\n\nRegards,\nHR Team`,
      attachments: [
        {
          filename: file.originalname,
          path: file.path,
        },
      ],
    });

    return res
      .status(200)
      .json({ message: "Rejoining letter sent successfully" });
  } catch (err) {
    console.error("Rejoin Error:", err);
    return res
      .status(500)
      .json({ message: "Failed to send rejoining letter", error: err.message });
  }
};

// Upload admin documents for employee
export const uploadAdminDocs = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const employee = await employeeModal.findById(employeeId);
    if (!employee)
      return res.status(404).json({ message: "Employee not found" });

    employee.adminDocuments = {
      salarySlip:
        req.files?.salarySlip?.[0]?.path || employee.adminDocuments.salarySlip,
      joiningLetter:
        req.files?.joiningLetter?.[0]?.path ||
        employee.adminDocuments.joiningLetter,
      terminationLetter:
        req.files?.terminationLetter?.[0]?.path ||
        employee.adminDocuments.terminationLetter,
    };

    await employee.save();
    res.status(200).json({ message: "Documents uploaded successfully" });
  } catch (err) {
    res.status(500).json({ message: "Upload failed", error: err.message });
  }
};

export const deleteRegisteredEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params;

    const employee = await employeeModal.findById(employeeId);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    // Only allow delete if status is "pending"
    if (employee.isApproved !== "pending") {
      return res.status(400).json({
        message: "Only pending (registered) employees can be deleted",
      });
    }

    await employeeModal.findByIdAndDelete(employeeId);

    // Send rejection email
    await sendEmail({
      to: employee.email,
      subject: "Application Rejected",
      text: `Dear ${employee.full_name},\n\nWe regret to inform you that your application has been rejected and your profile has been removed from our system.\n\nBest wishes,\nHR Team`,
    });

    res
      .status(200)
      .json({ message: "Employee deleted and rejection email sent" });
  } catch (err) {
    res.status(500).json({
      message: "Error deleting registered employee",
      error: err.message,
    });
  }
};

export const deleteTerminatedEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params;

    const employee = await employeeModal.findById(employeeId);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    if (!employee.terminationLetterSent) {
      return res.status(400).json({
        message: "Only terminated employees can be deleted",
      });
    }

    await employeeModal.findByIdAndDelete(employeeId);

    res
      .status(200)
      .json({ message: "Terminated employee deleted from database" });
  } catch (err) {
    res.status(500).json({
      message: "Error deleting terminated employee",
      error: err.message,
    });
  }
};

export const deleteRejectedEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params;

    const employee = await employeeModal.findById(employeeId);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    if (!employee.isApproved === "rejected") {
      return res.status(400).json({
        message: "Only Rejected employees can be deleted",
      });
    }

    await employeeModal.findByIdAndDelete(employeeId);

    res
      .status(200)
      .json({ message: "Rejected employee deleted from database" });
  } catch (err) {
    res.status(500).json({
      message: "Error deleting terminated employee",
      error: err.message,
    });
  }
};

// GET /admin/monthly-registrations
export const getMonthlyRegistrations = async (req, res) => {
  try {
    const result = await employeeModal.aggregate([
      {
        $group: {
          _id: { $month: "$createdAt" },
          count: { $sum: 1 },
        },
      },
      {
        $sort: { _id: 1 },
      },
    ]);

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const formatted = result.map((item) => ({
      month: months[item._id - 1],
      registrations: item.count,
    }));

    res.status(200).json(formatted);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching monthly stats", error: err.message });
  }
};
