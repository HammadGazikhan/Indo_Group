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
import { authenticateAdmin } from "../../middleware/adminAuthentication.js";

const router = express.Router();

// Admin uploads: salarySlip, joiningLetter, terminationLetter
const uploadAdminFields = adminUpload.fields([
  { name: "salarySlip", maxCount: 1 },
  { name: "joiningLetter", maxCount: 1 },
  { name: "terminationLetter", maxCount: 1 },
]);

router.post("/register", createAdmin);
router.post("/login", loginAdmin);
router.get("/employees", authenticateAdmin, getAllEmployees);
router.get("/employees/:id", authenticateAdmin, getSingleEmployee);
router.get("/pending-employees", authenticateAdmin, getPendingEmployees);
router.get("/rejected-employees", authenticateAdmin, getRejectedEmployees);
router.get("/approved-employees", authenticateAdmin, getApprovedEmployees);
router.get("/dashboard-stats", authenticateAdmin, getAdminDashboardStats);
router.post(
  "/salary-slip/:employeeId",
  adminUpload.single("salarySlip"),
  authenticateAdmin,
  sendSalarySlip
);
router.post(
  "/terminate/:employeeId",
  adminUpload.single("terminationLetter"),
  authenticateAdmin,
  terminateEmployee
);

router.get("/terminated-employees", authenticateAdmin, getTerminatedEmployees);
router.post(
  "/rejoin/:employeeId",
  adminUpload.single("rejoiningLetter"),
  authenticateAdmin,
  rejoinEmployee
);

router.post(
  "/verify/:employeeId",
  adminUpload.fields([{ name: "joiningLetter", maxCount: 1 }]),
  authenticateAdmin,
  verifyEmployee
);
router.post("/upload-docs/:employeeId", uploadAdminFields, uploadAdminDocs);
router.delete(
  "/employee/:employeeId",
  authenticateAdmin,
  deleteRegisteredEmployee
);
router.delete(
  "/terminated/:employeeId",
  authenticateAdmin,
  deleteTerminatedEmployee
);
router.delete(
  "/rejected-employees/:employeeId",
  authenticateAdmin,
  deleteRejectedEmployee
);
router.get(
  "/monthly-registrations",
  authenticateAdmin,
  getMonthlyRegistrations
);

export default router;
