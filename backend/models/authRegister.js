import express from "express";
import cors from "cors";
import { User } from "../models/userModel.js";

const app = express();
const router = express.Router();
app.use(cors());
app.use(express.json());

const authRegister = router.post("/register", async (req, res) => {
  const { name, phoneNumber, password, role } = req.body;
  if (!name || !phoneNumber || !password || !role) {
    return res.status(400).json({ message: "Please fill all the fields" });
  } else if (!["guru", "wali"].includes(role)) {
    return res.status(400).json({ message: "Invalid role" });
  }
  try {
    const user = new User({
      name,
      phoneNumber,
      password,
      role,
    });
    const createdUser = await user.save();
    res.status(201).json(createdUser);
  } catch (error) {
    app.use(express.urlencoded({ extended: true }));
    res.status(500).json({ message: error.message });
  }
});

export default authRegister;
