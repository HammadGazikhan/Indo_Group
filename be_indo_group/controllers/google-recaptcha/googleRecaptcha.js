import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
export const verifyCaptcha = async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: "Captcha token is missing" });
  }

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      {},
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: token,
        },
      }
    );

    const { success, score, action } = response.data;

    if (!success) {
      return res.status(400).json({ message: "Captcha verification failed" });
    }

    // Optional: check score or action for reCAPTCHA v3

    res.status(200).json({ message: "Captcha verified successfully" });
  } catch (error) {
    console.error("Captcha verification error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
