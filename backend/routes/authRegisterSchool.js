import express from "express";
import cors from "cors";
import { School } from "../models/schoolModel.js";

const app = express();
const router = express.Router();
app.use(cors());
app.use(express.json());

const authRegisterSchool = router.post("/register-school", async (req, res) => {
  const { name, address, position } = req.body;
  if (!name || !address || !position) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }
  try {
    const school = new School({
      name,
      address,
      position,
    });
    const createdSchool = await school.save();
    res.status(201).json(createdSchool);
  } catch (error) {
    app.use(express.urlencoded({ extended: true }));
    res.status(500).json({ message: error.message });
  }
});

export default authRegisterSchool;
