import express from "express";
import {
  registerEmployee,
  // loginEmployee,
} from "../../controllers/employee/employee.controller.js";
import { employeeUpload } from "../../utils/upload/multer.js";

const router = express.Router();

// Upload fields for registration
const uploadFields = employeeUpload.fields([
  { name: "aadhaar", maxCount: 1 },
  { name: "pan", maxCount: 1 },
  { name: "ssc", maxCount: 1 },
  { name: "hsc", maxCount: 1 },
  { name: "degree", maxCount: 1 },
]);

router.post("/register", uploadFields, registerEmployee);
// router.post("/login", loginEmployee);

export default router;
