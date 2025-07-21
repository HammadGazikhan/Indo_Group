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
  await transporter.sendMail({
    from: process.env.ADMIN_EMAIL,
    to,
    subject,
    text,
    attachments, // Optional: for file attachments
  });
};
