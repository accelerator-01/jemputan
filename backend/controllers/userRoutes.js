import express from "express";
import { authRegister, authLogin } from "./routes/authRoutes.js";
import cors from "cors";

const router = express.Router();
router.use(cors());
router.use(express.json());
router.use("/auth/register", authRegister);
router.use("/auth/login", authLogin);

export default router;
