import express from "express";
import { verifyCaptcha } from "../../controllers/google-recaptcha/googleRecaptcha.js";

const router = express.Router();

router.post("/verify-captcha", verifyCaptcha);

export default router;
