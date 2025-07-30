import employeeModal from "../../models/employee.modal.js";
import { sendEmail } from "../../utils/emailService/emailService.js";
import deleteFileIfExists from "../../utils/helpers/deleteDocuments.js";

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

    const documents = {
      aadhaar: employee.aadhaar,
      pan: employee.pan,
      ssc: employee.ssc,
      hsc: employee.hsc,
      degree: employee.degree,
    };
    deleteFileIfExists(documents); // adjust based on your schema

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
    const documents = {
      aadhaar: employee.aadhaar,
      pan: employee.pan,
      ssc: employee.ssc,
      hsc: employee.hsc,
      degree: employee.degree,
    };
    deleteFileIfExists(documents);

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
    const documents = {
      aadhaar: employee.aadhaar,
      pan: employee.pan,
      ssc: employee.ssc,
      hsc: employee.hsc,
      degree: employee.degree,
    };
    deleteFileIfExists(documents);

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
