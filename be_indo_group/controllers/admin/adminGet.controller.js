import employeeModal from "../../models/employee.modal.js";

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

//Get single employee
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
