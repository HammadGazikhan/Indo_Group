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

// const allowedOrigins = process.env.CLIENT_URL?.split(",") || [];

app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,PATCH,DELETE",
    allowedHeaders: "*",
    credentials: true,
  })
);

// app.use((req, res, next) => {
//   res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
//   next();
// });

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cookieParser());
app.use("/api/uploads", express.static("uploads"));

// Routes
app.use("/api/employee", employeeRoutes);
app.use("/api/admin", adminRoutes);

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
