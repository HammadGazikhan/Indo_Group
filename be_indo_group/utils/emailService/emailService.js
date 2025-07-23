import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_PASS,
  },
});

export const sendEmail = async ({ to, subject, text, attachments }) => {
  try {
    await transporter.sendMail({
      from: process.env.ADMIN_EMAIL,
      to,
      subject,
      text,
      attachments, // Optional: for file attachments
    });
    return { success: true };
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, error: error };
  }
  // await transporter.sendMail({
  //   from: process.env.ADMIN_EMAIL,
  //   to,
  //   subject,
  //   text,
  //   attachments, // Optional: for file attachments
  // });
};
