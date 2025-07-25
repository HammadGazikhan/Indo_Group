import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  full_name: String,
  email: String,
  phone: String,
  dob: String,
  work_experience: String,

  documents: {
    aadhaar: String,
    pan: String,
    ssc: String,
    hsc: String,
    degree: String,
  },

  isApproved: {
    type: String, // "pending" | "approved" | "rejected" | "terminated"
    default: "pending",
  },

  approvedAt: Date,

  joiningLetterSent: { type: Boolean, default: false },
  joiningLetterSentAt: Date,

  // rejoined: { type: Boolean, default: false },
  // rejoinedAt: Date,

  rejoinLetterSent: { type: Boolean, default: false },
  rejoinLetterSentAt: Date,

  salarySlips: [
    {
      month: String, // e.g. "June 2025"
      sentAt: Date,
      filePath: String,
    },
  ],

  terminationLetterSent: { type: Boolean, default: false },
  terminationLetterSentAt: Date,
  seen: { type: Boolean, default: false },
});

export default mongoose.model("Employee", employeeSchema);
