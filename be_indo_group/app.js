import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import employeeRoutes from "./routes/employee/employee.routes.js";
import adminRoutes from "./routes/admin/admin.routes.js";
import cors from "cors";
import { apiLogger } from "./middleware/middleware.js";

dotenv.config();

const app = express();
app.use(apiLogger);

app.use(
  cors({
    origin: process.env.CLIENT_URL, // or your React app's URL

    credentials: true,
  })
);

app.use((req, res, next) => {
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  next();
});

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/employee", employeeRoutes);
app.use("/admin", adminRoutes);

// DB + Server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () =>
      console.log(`Server on ${process.env.PORT}`)
    );
  })
  .catch((err) => console.error("Mongo error:", err));
