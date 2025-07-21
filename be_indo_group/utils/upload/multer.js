import multer from "multer";

// Employee documents upload
export const employeeUpload = multer({
  storage: multer.diskStorage({
    destination: "uploads/documents",
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
    },
  }),
});

// Admin documents upload
export const adminUpload = multer({
  storage: multer.diskStorage({
    destination: "uploads/admin-docs",
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
    },
  }),
});
