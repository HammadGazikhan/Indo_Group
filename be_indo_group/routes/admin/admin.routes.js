import express from "express";

import { adminUpload } from "../../utils/upload/multer.js";
import {
  getAdminDashboardStats,
  getMonthlyRegistrations,
} from "../../controllers/admin/stats.controller.js";
import {
  getAllEmployees,
  getApprovedEmployees,
  getPendingEmployees,
  getRejectedEmployees,
  getSingleEmployee,
  getTerminatedEmployees,
} from "../../controllers/admin/adminGet.controller.js";
import {
  createAdmin,
  loginAdmin,
  rejoinEmployee,
  sendSalarySlip,
  terminateEmployee,
  uploadAdminDocs,
  verifyEmployee,
} from "../../controllers/admin/adminPost.controller.js";
import {
  deleteRegisteredEmployee,
  deleteRejectedEmployee,
  deleteTerminatedEmployee,
} from "../../controllers/admin/adminDelete.controller.js";

const router = express.Router();

// Admin uploads: salarySlip, joiningLetter, terminationLetter
const uploadAdminFields = adminUpload.fields([
  { name: "salarySlip", maxCount: 1 },
  { name: "joiningLetter", maxCount: 1 },
  { name: "terminationLetter", maxCount: 1 },
]);

router.post("/register", createAdmin);
router.post("/login", loginAdmin);
router.get("/employees", getAllEmployees);
router.get("/employees/:id", getSingleEmployee);
router.get("/pending-employees", getPendingEmployees);
router.get("/rejected-employees", getRejectedEmployees);
router.get("/approved-employees", getApprovedEmployees);
router.get("/dashboard-stats", getAdminDashboardStats);
router.post(
  "/salary-slip/:employeeId",
  adminUpload.single("salarySlip"),
  sendSalarySlip
);
router.post(
  "/terminate/:employeeId",
  adminUpload.single("terminationLetter"),
  terminateEmployee
);

router.get("/terminated-employees", getTerminatedEmployees);
router.post(
  "/rejoin/:employeeId",
  adminUpload.single("rejoiningLetter"),
  rejoinEmployee
);

router.post(
  "/verify/:employeeId",
  adminUpload.fields([{ name: "joiningLetter", maxCount: 1 }]),
  verifyEmployee
);
router.post("/upload-docs/:employeeId", uploadAdminFields, uploadAdminDocs);
router.delete("/employee/:employeeId", deleteRegisteredEmployee);
router.delete("/terminated/:employeeId", deleteTerminatedEmployee);
router.delete("/rejected-employees/:employeeId", deleteRejectedEmployee);
router.get("/monthly-registrations", getMonthlyRegistrations);

export default router;
